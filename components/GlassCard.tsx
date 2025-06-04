import React, { ReactNode } from "react";
import "./GlassCard.css";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", style }) => (
  <div className={`glass-card ${className}`} style={style}>
    <span className="glass-card__shine"></span>
    {children}
  </div>
);

export default GlassCard;