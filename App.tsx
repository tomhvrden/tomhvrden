import React from "react";
import Starfield from "./components/Starfield";
import NavBar from "./components/NavBar";
import GlassCard from "./components/GlassCard";
import "./App.css";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <GlassCard>
        <h2 className="section__title">{title}</h2>
        <div className="section__body">{children}</div>
      </GlassCard>
    </section>
  );
}

function App() {
  return (
    <div className="app-root">
      <Starfield />
      <NavBar />
      <main className="main-content">
        <Section id="home" title="Welcome">
          <p>
            <b>TOM HVRDEN</b> — Modern Music Producer. <br />
            Welcome to a futuristic sonic universe.
          </p>
        </Section>
        <Section id="music" title="Music">
          <p>Listen to the latest tracks, collaborations, and releases.</p>
          {/* Embed music players or links here */}
        </Section>
        <Section id="about" title="About">
          <p>
            TOM HVRDEN is a visionary producer blending electronic, hip-hop, and cinematic sounds. 
            Discover the journey, influences, and vision for the future.
          </p>
        </Section>
        <Section id="beats" title="Beats">
          <p>
            Explore exclusive beats, available for licensing and collaboration. 
            <br />
            <a href="#contact" style={{color: "#5ef3ff"}}>Contact for custom projects.</a>
          </p>
        </Section>
        <Section id="blog" title="Blog">
          <p>
            Read about music production tips, studio stories, and industry news.
          </p>
        </Section>
        <Section id="events" title="Events">
          <p>
            Upcoming shows, livestreams, and music events. Stay tuned!
          </p>
        </Section>
      </main>
    </div>
  );
}

export default App;