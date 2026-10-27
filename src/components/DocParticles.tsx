"use client";

import { useEffect, useRef } from "react";

/**
 * Signature hero animation: a document built from particles that periodically
 * dissolves into a flowing data stream — "paper becomes data".
 */

type P = {
  x: number;
  y: number;
  // document target (unit space) or null for ambient particles
  dx: number | null;
  dy: number | null;
  // stream params
  sy: number;
  speed: number;
  amp: number;
  ph: number;
  size: number;
  c: string;
  gold: boolean;
  delay: number;
};

const BLUE = ["#5cb0e4", "#2e93d4", "#93cdf0", "#3fa5ee", "#1c7ec2"];
const GOLD = "#ffc600";

function buildDocPoints(w: number, h: number) {
  // document occupies a centered rect in unit space
  const pts: { x: number; y: number; gold: boolean }[] = [];
  const L = 0.22, R = 0.78, T = 0.08, B = 0.9;

  // perimeter
  const per = 130;
  for (let i = 0; i < per; i++) {
    const t = i / per;
    let x, y;
    if (t < 0.25) { x = L + (R - L) * (t / 0.25); y = T; }
    else if (t < 0.5) { x = R; y = T + (B - T) * ((t - 0.25) / 0.25); }
    else if (t < 0.75) { x = R - (R - L) * ((t - 0.5) / 0.25); y = B; }
    else { x = L; y = B - (B - T) * ((t - 0.75) / 0.25); }
    pts.push({ x, y, gold: false });
  }

  // folded corner (top-right)
  const fx = R - 0.07, fy = T;
  for (let i = 0; i <= 18; i++) {
    const t = i / 18;
    pts.push({ x: fx + (R - fx) * t, y: fy + (T + 0.09 - fy) * t, gold: false });
    pts.push({ x: fx, y: fy + 0.09 * t, gold: false });
  }

  // text lines
  const lines = [
    { y: 0.24, w: 0.5, n: 26 },
    { y: 0.33, w: 0.62, n: 32 },
    { y: 0.42, w: 0.56, n: 28 },
    { y: 0.51, w: 0.62, n: 32 },
    { y: 0.60, w: 0.4, n: 20 },
  ];
  for (const ln of lines) {
    for (let i = 0; i < ln.n; i++) {
      pts.push({
        x: L + 0.07 + (ln.w * i) / (ln.n - 1),
        y: ln.y + Math.sin(i * 0.8) * 0.004,
        gold: i === ln.n - 1 && ln.y === 0.51,
      });
    }
  }

  // seal circle (bottom left) — gold accent
  const cx = L + 0.13, cy = B - 0.14, r = 0.055;
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * Math.PI * 2;
    pts.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r * (w / h), gold: true });
  }

  // signature squiggle near bottom right
  for (let i = 0; i < 24; i++) {
    const t = i / 23;
    pts.push({
      x: L + 0.3 + t * 0.18,
      y: B - 0.15 + Math.sin(t * 9) * 0.02,
      gold: i > 18,
    });
  }

  return pts;
}

export default function DocParticles({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rtl = document.documentElement.dir === "rtl";
    let W = 0, H = 0, dpr = 1;
    let parts: P[] = [];
    let raf = 0;
    let running = true;
    const mouse = { x: -9999, y: -9999 };

    const mirror = (ux: number) => (rtl ? 1 - ux : ux);

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduced) drawStatic();
    }

    function seed() {
      const doc = buildDocPoints(W, H);
      parts = [];
      const total = 620;
      for (let i = 0; i < total; i++) {
        const onDoc = i < doc.length;
        const dp = onDoc ? doc[i] : null;
        const gold = dp?.gold ?? Math.random() < 0.06;
        parts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          dx: dp ? mirror(dp.x) : null,
          dy: dp ? dp.y : null,
          sy: 0.15 + Math.random() * 0.7,
          speed: 30 + Math.random() * 70,
          amp: 6 + Math.random() * 26,
          ph: Math.random() * Math.PI * 2,
          size: dp?.gold ? 2 : 1 + Math.random() * 1.6,
          c: gold ? GOLD : BLUE[(Math.random() * BLUE.length) | 0],
          gold,
          delay: Math.random() * 0.5,
        });
      }
    }

    const CYCLE = 9.5; // seconds
    // phases: assemble [0,.30] | hold [.30,.52] | dissolve [.52,.78] | stream [.78,1]

    function drawStatic() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        if (p.dx == null) continue;
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.dx * W, p.dy! * H, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    let t0 = performance.now();

    function frame(now: number) {
      if (!running) return;
      const t = ((now - t0) / 1000) % CYCLE;
      const elapsed = (now - t0) / 1000;
      ctx!.clearRect(0, 0, W, H);

      const inDoc = t < 0.52;
      const assembling = t < 0.3;
      const scanT = (t - 0.3) / 0.22;

      for (const p of parts) {
        let tx: number, ty: number;

        if (p.dx != null && inDoc) {
          // document mode
          const k = assembling
            ? Math.min(1, Math.max(0, (t / 0.3 - p.delay) / (1 - p.delay)))
            : 1;
          const e = 1 - Math.pow(1 - k, 3);
          tx =
            p.x +
            (p.dx * W - p.x) * (assembling ? Math.min(1, e * 0.28 + 0.06) : 0.1);
          ty =
            p.y +
            (p.dy! * H - p.y) * (assembling ? Math.min(1, e * 0.28 + 0.06) : 0.1);
          // breathing jitter on hold
          if (!assembling) {
            tx += Math.sin(elapsed * 2 + p.ph) * 0.4;
            ty += Math.cos(elapsed * 1.6 + p.ph) * 0.4;
          }
        } else {
          // stream mode — flow horizontally with sine wave
          const dir = rtl ? -1 : 1;
          p.x += (p.speed * dir) / 60;
          const wob = Math.sin(elapsed * 1.4 + p.ph) * p.amp;
          ty = p.sy * H + wob;
          p.y += (ty - p.y) * 0.08;
          if (dir > 0 && p.x > W + 20) p.x = -20;
          if (dir < 0 && p.x < -20) p.x = W + 20;
          tx = p.x;
          ty = p.y;
        }

        // mouse repulsion
        const mdx = tx - mouse.x;
        const mdy = (ty ?? p.y) - mouse.y;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < 9000 && md2 > 0.01) {
          const d = Math.sqrt(md2);
          const f = ((95 - d) / 95) * 2.4;
          tx += (mdx / d) * f;
          ty = (ty ?? p.y) + (mdy / d) * f;
        }

        p.x = tx;
        if (p.dx == null || !inDoc) {
          // keep y for stream particles
        } else {
          p.y = ty;
        }

        const dim = p.dx == null ? 0.35 : 1;
        ctx!.globalAlpha =
          (0.5 + 0.5 * Math.sin(elapsed * 1.2 + p.ph) * 0.4 + 0.35) * dim;
        ctx!.fillStyle = p.c;
        ctx!.beginPath();
        ctx!.arc(tx, ty ?? p.y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      }

      // scan line during hold
      if (t >= 0.3 && t < 0.52 && scanT >= 0 && scanT <= 1) {
        const L = 0.22 * W, R = 0.78 * W;
        const x1 = rtl ? W - R : L;
        const x2 = rtl ? W - L : R;
        const sy = (0.1 + scanT * 0.78) * H;
        const g = ctx!.createLinearGradient(x1, 0, x2, 0);
        g.addColorStop(0, "rgba(255,198,0,0)");
        g.addColorStop(0.5, "rgba(255,198,0,0.9)");
        g.addColorStop(1, "rgba(255,198,0,0)");
        ctx!.globalAlpha = 0.9;
        ctx!.fillStyle = g;
        ctx!.fillRect(x1, sy - 1, x2 - x1, 2);
        ctx!.shadowColor = "rgba(255,198,0,0.8)";
        ctx!.shadowBlur = 14;
        ctx!.fillRect(x1, sy - 0.5, x2 - x1, 1);
        ctx!.shadowBlur = 0;
      }

      ctx!.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running && !reduced) {
        t0 = performance.now() - (t0 % 1);
        raf = requestAnimationFrame(frame);
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);
    if (!reduced) raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
