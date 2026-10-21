import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  r: number;
  tw: number;
  phase: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const count = Math.min(220, Math.floor((w * h) / 9000));
    const stars: Star[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.8 + 0.2,
      r: Math.random() * 1.4 + 0.2,
      tw: Math.random() * 0.02 + 0.004,
      phase: Math.random() * Math.PI * 2,
    }));

    let raf = 0;
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.phase += s.tw;
        const alpha = 0.35 + Math.sin(s.phase) * 0.35;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 240, 210, ${alpha * s.z})`;
        ctx.fill();
        if (s.z > 0.85) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * s.z * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 220, 160, ${alpha * 0.08})`;
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full"
      aria-hidden
    />
  );
}
