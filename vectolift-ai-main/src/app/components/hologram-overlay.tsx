"use client";
import { useEffect, useRef } from "react";

// City dot positions mapped to the RIGHT-side hologram area
// Coordinates are % of the container (0..1) to stay image-relative
const CITY_DOTS = [
  { x: 0.47, y: 0.13 }, // Darwin
  { x: 0.21, y: 0.49 }, // Perth
  { x: 0.78, y: 0.44 }, // Brisbane
  { x: 0.82, y: 0.54 }, // Sydney
  { x: 0.73, y: 0.60 }, // Canberra
  { x: 0.52, y: 0.60 }, // Adelaide
  { x: 0.60, y: 0.68 }, // Melbourne
  { x: 0.63, y: 0.82 }, // Hobart
];

// Network edges between city dot indices
const EDGES = [
  [0, 1], [0, 2], [1, 5], [2, 3],
  [3, 4], [4, 5], [4, 6], [6, 7],
];

interface Pulse { edge: number; t: number; speed: number }

export default function HologramSubtle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef  = useRef<number>(0);
  const startRef  = useRef<number>(0);
  const pulsesRef = useRef<Pulse[]>(
    EDGES.map((_, i) => ({
      edge: i,
      t: Math.random(),
      speed: 0.0005 + i * 0.00004,
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const draw = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      // ── SINGLE SLOW SCAN LINE (very subtle) ──
      const scanY = ((elapsed * 0.018) % H);
      const scanGrad = ctx.createLinearGradient(0, scanY - 18, 0, scanY + 18);
      scanGrad.addColorStop(0,   "rgba(0,229,180,0)");
      scanGrad.addColorStop(0.5, "rgba(0,229,180,0.04)");
      scanGrad.addColorStop(1,   "rgba(0,229,180,0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 18, W, 36);

      // ── CITY NODE SOFT PULSES ──
      const t2 = elapsed * 0.0015;
      CITY_DOTS.forEach((dot, i) => {
        const cx = dot.x * W;
        const cy = dot.y * H;
        const pulse = 0.4 + 0.6 * Math.sin(t2 + i * 0.9);

        // Outer ring — very faint
        ctx.beginPath();
        ctx.arc(cx, cy, 3 + pulse * 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,229,180,${0.10 * pulse})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Core dot
        ctx.beginPath();
        ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
        const dg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 2.5);
        dg.addColorStop(0, "rgba(255,255,255,0.85)");
        dg.addColorStop(1, "rgba(0,229,180,0.0)");
        ctx.fillStyle = dg;
        ctx.fill();
      });

      // ── NETWORK PULSE BLOBS (one per edge, gentle) ──
      const pulses = pulsesRef.current;
      pulses.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;

        const [ai, bi] = EDGES[p.edge];
        const a = CITY_DOTS[ai];
        const b = CITY_DOTS[bi];
        const px = (a.x + (b.x - a.x) * p.t) * W;
        const py = (a.y + (b.y - a.y) * p.t) * H;

        const pg = ctx.createRadialGradient(px, py, 0, px, py, 5);
        pg.addColorStop(0,   "rgba(255,255,255,0.75)");
        pg.addColorStop(0.4, "rgba(0,229,180,0.35)");
        pg.addColorStop(1,   "rgba(0,229,180,0)");
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.fill();
      });

      // ── BOTTOM PROJECTION GLOW (very soft ellipse) ──
      const platPulse = 0.7 + 0.3 * Math.sin(elapsed * 0.0018);
      const px2 = W * 0.50;
      const py2 = H * 0.91;
      const platGrad = ctx.createRadialGradient(px2, py2, 0, px2, py2, 48);
      platGrad.addColorStop(0,   `rgba(0,229,180,${0.09 * platPulse})`);
      platGrad.addColorStop(0.5, `rgba(0,229,180,${0.04 * platPulse})`);
      platGrad.addColorStop(1,    "rgba(0,229,180,0)");
      ctx.save();
      ctx.scale(1, 0.30);
      ctx.translate(0, py2 / 0.30 - py2);
      ctx.fillStyle = platGrad;
      ctx.beginPath();
      ctx.arc(px2, py2, 48, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    // Wrapper floats gently — matches how the hologram breathes in the reference
    <div
      className="relative w-full h-full"
      style={{ animation: "holoFloat 5s ease-in-out infinite" }}
    >
      {/*
        Canvas sits on top of the hologram area of the hero photo.
        mix-blend-mode: screen so only cyan light is added — background shows through.
        Opacity kept intentionally low so the photo remains dominant.
      */}
      <canvas
        ref={canvasRef}
        width={480}
        height={680}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen", opacity: 0.75 }}
      />

      {/* Keyframes for gentle breathing float */}
      <style>{`
        @keyframes holoFloat {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-7px); }
        }
      `}</style>
    </div>
  );
}
