import { useEffect, useRef } from 'react';

const GLYPHS = '01<>{}[]()/\\=+*-#$%&ABCDEFGHJKLMNPQRSTUVWXYZ0123456789アカサタナハマヤラワ'.split('');
const CELL = 15;

// Digital-rain hero backdrop. Pure canvas, no dependency — paused entirely under
// prefers-reduced-motion (only the static first-frame fill remains).
const MatrixRain = ({ className = '' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        let columns = [];
        let width = 0;
        let height = 0;
        let raf = 0;

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            width = Math.max(1, rect.width);
            height = Math.max(1, rect.height);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            columns = Array.from({ length: Math.ceil(width / CELL) }, () => ({
                y: Math.random() * -height,
                speed: 0.35 + Math.random() * 0.75,
                len: 8 + ((Math.random() * 18) | 0),
            }));
            ctx.fillStyle = '#0c0d0e';
            ctx.fillRect(0, 0, width, height);
        };

        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return () => ro.disconnect();
        }

        let last = 0;
        const frame = (t) => {
            raf = requestAnimationFrame(frame);
            if (t - last < 55) return;
            last = t;
            ctx.fillStyle = 'rgba(12,13,14,.18)';
            ctx.fillRect(0, 0, width, height);
            ctx.font = `${CELL}px 'Spline Sans Mono', monospace`;
            columns.forEach((c, i) => {
                const x = i * CELL;
                for (let k = 0; k < c.len; k++) {
                    const y = c.y - k * CELL;
                    if (y < -CELL || y > height + CELL) continue;
                    ctx.fillStyle = k === 0 ? 'rgba(122,240,211,.85)' : `rgba(94,230,196,${(0.22 * (1 - k / c.len)).toFixed(3)})`;
                    ctx.fillText(GLYPHS[(Math.random() * GLYPHS.length) | 0], x, y);
                }
                c.y += c.speed * CELL * 0.6;
                if (c.y - c.len * CELL > height) {
                    c.y = Math.random() * -120;
                    c.speed = 0.35 + Math.random() * 0.75;
                }
            });
        };
        raf = requestAnimationFrame(frame);

        return () => {
            ro.disconnect();
            cancelAnimationFrame(raf);
        };
    }, []);

    return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
};

export default MatrixRain;
