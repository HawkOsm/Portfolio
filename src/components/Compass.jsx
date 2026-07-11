import { useEffect, useRef } from 'react';

const CARDINALS = [
    { deg: 0, label: 'N' },
    { deg: 90, label: 'E' },
    { deg: 180, label: 'S' },
    { deg: 270, label: 'W' },
];

const SETTLE_MS = 2800; // needle-settle animation duration + a beat

// Hairline compass rose. The needle swings and settles on load; after that,
// on fine-pointer devices it tracks the cursor. Decorative for screen readers.
const Compass = ({ className = '' }) => {
    const svgRef = useRef(null);
    const needleRef = useRef(null);

    // Needle chases the cursor with a per-frame lerp — no CSS transition,
    // so it stays responsive instead of rubber-banding behind fast movement.
    useEffect(() => {
        const finePointer = window.matchMedia('(pointer: fine)').matches;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!finePointer || reducedMotion) return;

        let enabled = false;
        let started = false;
        let running = false;
        let current = 0;
        let target = 0;
        let raf = 0;
        let center = null; // cached; viewport-relative, so scroll/resize invalidate it
        const enableTimer = setTimeout(() => { enabled = true; }, SETTLE_MS);
        const invalidateCenter = () => { center = null; };

        const tick = () => {
            if (!needleRef.current) { running = false; return; }
            // shortest-path delta so the needle never spins the long way round
            const delta = ((target - current + 540) % 360) - 180;
            if (Math.abs(delta) < 0.05) {
                // converged — park the needle and stop the loop until the next move
                current = target;
                needleRef.current.style.transform = `rotate(${current}deg)`;
                running = false;
                return;
            }
            current += delta * 0.12;
            needleRef.current.style.transform = `rotate(${current}deg)`;
            raf = requestAnimationFrame(tick);
        };

        const onMove = (e) => {
            if (!enabled || !svgRef.current) return;
            if (!center) {
                const rect = svgRef.current.getBoundingClientRect();
                center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
            }
            target = (Math.atan2(e.clientY - center.y, e.clientX - center.x) * 180) / Math.PI + 90;
            if (!started) {
                started = true;
                needleRef.current.classList.add('is-tracking');
            }
            if (!running) {
                running = true;
                raf = requestAnimationFrame(tick);
            }
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('scroll', invalidateCenter, { passive: true });
        window.addEventListener('resize', invalidateCenter);
        return () => {
            clearTimeout(enableTimer);
            cancelAnimationFrame(raf);
            running = false;
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('scroll', invalidateCenter);
            window.removeEventListener('resize', invalidateCenter);
        };
    }, []);

    const ticks = [];
    for (let deg = 0; deg < 360; deg += 5) {
        const major = deg % 30 === 0;
        ticks.push(
            <line
                key={deg}
                x1="260"
                y1={major ? 34 : 40}
                x2="260"
                y2="48"
                stroke="currentColor"
                strokeWidth={major ? 1.2 : 0.6}
                opacity={major ? 0.7 : 0.35}
                transform={`rotate(${deg} 260 260)`}
            />
        );
    }

    return (
        <div ref={svgRef} className={`relative ${className}`} aria-hidden="true">
        <svg viewBox="0 0 520 520" className="w-full h-full" fill="none">
            {/* outer rings */}
            <circle cx="260" cy="260" r="236" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <circle cx="260" cy="260" r="212" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
            <circle cx="260" cy="260" r="120" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />

            <g>{ticks}</g>

            {/* degree labels every 30° */}
            {Array.from({ length: 12 }, (_, i) => i * 30).map((deg) => (
                <text
                    key={deg}
                    x="260"
                    y="26"
                    textAnchor="middle"
                    fontSize="11"
                    fontFamily="'Spline Sans Mono', monospace"
                    fill="currentColor"
                    opacity="0.5"
                    transform={`rotate(${deg} 260 260)`}
                >
                    {String(deg).padStart(3, '0')}
                </text>
            ))}

            {/* cardinal letters */}
            {CARDINALS.map(({ deg, label }) => (
                <text
                    key={label}
                    x="260"
                    y="86"
                    textAnchor="middle"
                    fontSize="22"
                    fontFamily="'Saira Condensed', sans-serif"
                    fontWeight="600"
                    fill={label === 'N' ? '#E4572E' : 'currentColor'}
                    opacity={label === 'N' ? 1 : 0.7}
                    transform={`rotate(${deg} 260 260)`}
                >
                    {label}
                </text>
            ))}

        </svg>

        {/* needle on its own layer — rotating it never repaints the rose */}
        <svg
            ref={needleRef}
            viewBox="0 0 520 520"
            className="compass-needle absolute inset-0 w-full h-full"
            fill="none"
        >
            <polygon points="260,116 271,260 260,290 249,260" fill="#E4572E" />
            <polygon points="260,404 271,260 260,230 249,260" fill="currentColor" opacity="0.45" />
            <circle cx="260" cy="260" r="6" fill="#0B0C0E" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        </div>
    );
};

export default Compass;
