import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  o: number;
  size: number;
  speed: number;
}

const STAR_COUNT = 180;
const STAR_SPEED = 0.5;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function createStar(width: number, height: number): Star {
  return {
    x: randomBetween(-width/2, width/2),
    y: randomBetween(-height/2, height/2),
    z: randomBetween(0.2, 1),
    o: randomBetween(0.3, 1),
    size: randomBetween(0.5, 2.1),
    speed: randomBetween(0.08, STAR_SPEED)
  };
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    starsRef.current = Array.from({ length: STAR_COUNT }, () =>
      createStar(width, height)
    );

    const ctx = canvas.getContext("2d")!;
    ctx.globalAlpha = 0.8;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);

      for (const star of starsRef.current) {
        const parallax = (star.z ** 2) * 0.7 + 0.3;
        ctx.beginPath();
        ctx.arc(
          star.x * parallax,
          star.y * parallax,
          star.size * parallax,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = `rgba(255,255,255,${star.o * parallax})`;
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 6 * parallax;
        ctx.fill();
        star.z -= star.speed * 0.003;
        if (star.z < 0.1) {
          Object.assign(star, createStar(width, height));
          star.z = 1;
        }
      }
      ctx.restore();
    }

    function loop() {
      draw();
      animationFrameRef.current = requestAnimationFrame(loop);
    }

    loop();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      starsRef.current = Array.from({ length: STAR_COUNT }, () =>
        createStar(width, height)
      );
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "radial-gradient(ellipse at 70% 30%, #1b2135 0%, #000 100%)"
      }}
      aria-hidden="true"
    />
  );
};

export default Starfield;