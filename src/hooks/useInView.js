import { useEffect, useRef, useState } from 'react';

const useInView = ({ rootMargin = '0px', once = false } = {}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                if (once) observer.disconnect();
            } else if (!once) {
                setInView(false);
            }
        }, { rootMargin });
        observer.observe(el);
        return () => observer.disconnect();
    }, [rootMargin, once]);

    return [ref, inView];
};

export default useInView;
