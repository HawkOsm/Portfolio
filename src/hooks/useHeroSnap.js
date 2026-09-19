import { useEffect } from 'react';

// While the hero is still on screen, a downward wheel tick glides straight to the
// next section instead of a few pixels of native scroll; an upward tick from just
// below the fold glides back to the top. Trackpad/touch scrolling elsewhere on the
// page is untouched — this only binds 'wheel' and only near the hero.
const useHeroSnap = (heroRef, targetRef) => {
    useEffect(() => {
        const hero = heroRef.current;
        const target = targetRef.current;
        const header = document.querySelector('header[data-site-header]');
        if (!hero || !target) return undefined;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

        let jumping = false;
        let jumpRaf = 0;

        const glide = (from, to) => {
            const dist = to - from;
            const duration = 380;
            const start = performance.now();
            jumping = true;
            const step = (now) => {
                const p = Math.min(1, (now - start) / duration);
                const eased = 1 - Math.pow(1 - p, 3);
                // behavior: 'instant' is required here — the page sets a global CSS
                // scroll-behavior: smooth, and without this override each rAF tick would
                // kick off its own smooth-scroll animation that cancels the previous one,
                // so the page barely moves for most of the glide and then jumps at the end.
                window.scrollTo({ top: from + dist * eased, left: 0, behavior: 'instant' });
                if (p < 1) {
                    jumpRaf = requestAnimationFrame(step);
                } else {
                    jumping = false;
                }
            };
            jumpRaf = requestAnimationFrame(step);
        };

        const onWheel = (e) => {
            if (e.ctrlKey || jumping) {
                if (jumping) e.preventDefault();
                return;
            }
            const scrollY = window.scrollY;
            const chrome = header ? header.getBoundingClientRect().height : 0;
            const targetY = Math.max(0, Math.round(scrollY + target.getBoundingClientRect().top - chrome));

            if (e.deltaY > 0 && scrollY < targetY - 8) {
                e.preventDefault();
                glide(scrollY, targetY);
            } else if (e.deltaY < 0 && scrollY > 0 && scrollY <= targetY + 8) {
                e.preventDefault();
                glide(scrollY, 0);
            }
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        return () => {
            window.removeEventListener('wheel', onWheel);
            cancelAnimationFrame(jumpRaf);
        };
    }, [heroRef, targetRef]);
};

export default useHeroSnap;
