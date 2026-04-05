import { useEffect, useRef } from 'react';

const CinnamonBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* ── Accumulated powder layer (bottom fill) ── */
    const accumulationMap: number[] = new Array(Math.ceil(window.innerWidth)).fill(0);

    /* ── Particle colours ── */
    const colors = [
      [210, 105, 30],
      [180, 83,  9 ],
      [234, 88,  12],
      [245, 158, 11],
      [161, 61,  7 ],
      [255, 200, 100],
      [200, 90,  20],
    ];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      r: number; g: number; b: number;
      alpha: number;
      settled: boolean;
      settleY: number;
    }

    const particles: Particle[] = [];
    const MAX = 350;
    const SPAWN_RATE = 4;

    const mkParticle = (): Particle => {
      const c = colors[Math.floor(Math.random() * colors.length)];
      return {
        x:       Math.random() * canvas.width,
        y:       -8,
        vx:      (Math.random() - 0.5) * 0.8,
        vy:      Math.random() * 1.5 + 0.8,
        size:    Math.random() * 3.5 + 1,
        r: c[0], g: c[1], b: c[2],
        alpha:   Math.random() * 0.6 + 0.35,
        settled: false,
        settleY: 0,
      };
    };

    /* Pre-fill screen with particles at various heights */
    for (let i = 0; i < MAX; i++) {
      const p = mkParticle();
      p.y = Math.random() * canvas.height;
      particles.push(p);
    }

    let frame = 0;
    let raf: number;

    const draw = () => {
      frame++;

      /* Spawn new particles */
      if (frame % SPAWN_RATE === 0 && particles.filter(p => !p.settled).length < MAX) {
        particles.push(mkParticle());
      }

      /* Fade trail — creates powder accumulation effect */
      ctx.fillStyle = 'rgba(0,0,0,0.018)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        if (p.settled) {
          /* Draw settled powder pile */
          const grad = ctx.createRadialGradient(p.x, p.settleY, 0, p.x, p.settleY, p.size * 2.5);
          grad.addColorStop(0, `rgba(${p.r},${p.g},${p.b},${p.alpha})`);
          grad.addColorStop(1, `rgba(${p.r},${p.g},${p.b},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.settleY, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
          continue;
        }

        /* Draw falling particle */
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, `rgba(${p.r},${p.g},${p.b},${p.alpha})`);
        grad.addColorStop(0.5, `rgba(${p.r},${p.g},${p.b},${p.alpha * 0.6})`);
        grad.addColorStop(1, `rgba(${p.r},${p.g},${p.b},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        /* Update position */
        p.vy += 0.015; /* gravity */
        p.vx += Math.sin(frame * 0.01 + p.x * 0.005) * 0.02; /* gentle sway */
        p.x  += p.vx;
        p.y  += p.vy;

        /* Wrap horizontally */
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        /* Check accumulation level at this x column */
        const col = Math.floor(p.x);
        const accHeight = accumulationMap[col] ?? 0;
        const settleThreshold = canvas.height - accHeight;

        if (p.y >= settleThreshold) {
          p.settled  = true;
          p.settleY  = settleThreshold;
          /* Build up the pile */
          const spread = Math.ceil(p.size * 1.5);
          for (let dx = -spread; dx <= spread; dx++) {
            const c = col + dx;
            if (c >= 0 && c < accumulationMap.length) {
              const falloff = 1 - Math.abs(dx) / (spread + 1);
              accumulationMap[c] = (accumulationMap[c] ?? 0) + p.size * 0.35 * falloff;
            }
          }
        }
      }

      /* Draw accumulated powder floor as a smooth filled shape */
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x < canvas.width; x++) {
        const h = accumulationMap[x] ?? 0;
        ctx.lineTo(x, canvas.height - h);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();

      const floorGrad = ctx.createLinearGradient(0, canvas.height - 80, 0, canvas.height);
      floorGrad.addColorStop(0, 'rgba(210,105,30,0.0)');
      floorGrad.addColorStop(0.3, 'rgba(210,105,30,0.35)');
      floorGrad.addColorStop(0.7, 'rgba(180,83,9,0.65)');
      floorGrad.addColorStop(1,   'rgba(140,60,5,0.85)');
      ctx.fillStyle = floorGrad;
      ctx.fill();

      /* Glow on top of pile */
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x < canvas.width; x++) {
        ctx.lineTo(x, canvas.height - (accumulationMap[x] ?? 0));
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.strokeStyle = 'rgba(251,191,36,0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  /* Watermark SVG sticks */
  const watermarks = [
    { x: '3%',  y: '8%',  rotate: 22,  opacity: 0.06 },
    { x: '70%', y: '3%',  rotate: -14, opacity: 0.05 },
    { x: '40%', y: '38%', rotate: 42,  opacity: 0.04 },
    { x: '80%', y: '52%', rotate: -28, opacity: 0.06 },
    { x: '14%', y: '62%', rotate: 10,  opacity: 0.05 },
    { x: '54%', y: '78%', rotate: -18, opacity: 0.04 },
  ];

  return (
    <>
      {/* Black base */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black" />

      {/* Subtle warm radial glows */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 35% at 20% 25%, rgba(180,83,9,0.15) 0%, transparent 70%)'
      }} />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 45% 40% at 80% 70%, rgba(234,88,12,0.10) 0%, transparent 70%)'
      }} />

      {/* SVG watermark sticks */}
      {watermarks.map((w, i) => (
        <svg
          key={i}
          className="fixed pointer-events-none z-0"
          style={{ left: w.x, top: w.y, opacity: w.opacity, transform: `rotate(${w.rotate}deg)`, width: 160, height: 360 }}
          viewBox="0 0 60 200"
          fill="none"
        >
          <rect x="20" y="0" width="20" height="200" rx="10" fill="rgba(251,191,36,1)" />
          <rect x="22" y="0" width="5"  height="200" rx="2"  fill="rgba(255,255,255,0.3)" />
          <rect x="29" y="0" width="2"  height="200" rx="1"  fill="rgba(255,255,255,0.15)" />
          {[0,20,40,60,80,100,120,140,160,180].map((y, j) => (
            <ellipse key={j} cx="30" cy={y+10} rx="10" ry="3" stroke="rgba(180,83,9,0.5)" strokeWidth="1" fill="none" />
          ))}
        </svg>
      ))}

      {/* Canvas powder rain */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
    </>
  );
};

export default CinnamonBackground;
