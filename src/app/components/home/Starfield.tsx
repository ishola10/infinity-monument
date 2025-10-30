"use client";

import { useRef, useEffect } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numStars = 120;
    const stars = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1.5,
      twinkle: Math.random() * 0.05 + 0.01,
      drift: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.8 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        s.opacity += s.twinkle;
        if (s.opacity >= 1 || s.opacity <= 0.2) s.twinkle *= -1;
        s.x += s.drift;
        if (s.x > width) s.x = 0;
        if (s.x < 0) s.x = width;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(255, 215, 120, 0.8)";
        ctx.fillStyle = `rgba(255, 200, 100, ${s.opacity})`;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 w-full h-full pointer-events-none"
    />
  );
}
