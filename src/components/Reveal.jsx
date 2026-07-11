import useInView from '../hooks/useInView.js';

// Fades content up once it scrolls into view. Delay is in ms.
const Reveal = ({ children, delay = 0, className = '' }) => {
    const [ref, inView] = useInView({ rootMargin: '-40px', once: true });

    return (
        <div
            ref={ref}
            className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
};

export default Reveal;
