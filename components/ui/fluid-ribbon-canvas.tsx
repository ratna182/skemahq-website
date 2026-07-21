"use client";

import { useEffect, useRef } from "react";

export default function FluidRibbonCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || 400;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Cable configuration parameters
    const strandsCount = 6;
    const strandRadius = 14; // Cable thickness in px

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const centerY = height / 2;

      // Draw strands from back to front
      for (let s = 0; s < strandsCount; s++) {
        const offsetPhase = (s * Math.PI * 2) / strandsCount;
        const strandAlpha = 0.85 + Math.sin(time + s) * 0.15;

        ctx.beginPath();
        const steps = 180;
        const dx = width / steps;

        for (let i = 0; i <= steps; i++) {
          const x = i * dx;
          const normalizedX = x / width;

          // Cuberto knot math: tight loop near center (normalizedX ~ 0.45..0.55), smooth strands at edges
          const centerDist = Math.abs(normalizedX - 0.5);
          const knotFactor = Math.exp(-Math.pow(centerDist * 5, 2));

          const wave1 = Math.sin(normalizedX * 6 + time + offsetPhase) * 24;
          const wave2 = Math.cos(normalizedX * 12 - time * 0.8 + s) * (15 + knotFactor * 65);
          const knotLoop = Math.sin(normalizedX * Math.PI * 4 + time * 1.2 + offsetPhase) * (knotFactor * 110);

          const y = centerY + wave1 + wave2 + knotLoop + (s - strandsCount / 2) * 12 * (1 - knotFactor * 0.5);

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Tubular 3D Shading & Lighting Gradient
        const grad = ctx.createLinearGradient(0, centerY - 100, 0, centerY + 100);
        grad.addColorStop(0, "#e2e8f0"); // Soft light top highlight
        grad.addColorStop(0.3, "#94a3b8"); // Metallic silver midtone
        grad.addColorStop(0.7, "#334155"); // Deep shadow bottom
        grad.addColorStop(1, "#0f172a");

        ctx.lineWidth = strandRadius * (1 + 0.2 * Math.sin(time + s));
        ctx.strokeStyle = grad;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = strandAlpha;

        // Shadow depth glow
        ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
        ctx.shadowBlur = 18;
        ctx.shadowOffsetY = 12;

        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[320px] sm:min-h-[420px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none w-full h-full opacity-90"
      />
    </div>
  );
}
