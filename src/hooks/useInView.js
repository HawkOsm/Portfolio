import { useEffect, useRef, useState } from 'react';

const useInView = (options = { rootMargin: '200px' }) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(true);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
        }, options);
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return [ref, inView];
};

export default useInView;
