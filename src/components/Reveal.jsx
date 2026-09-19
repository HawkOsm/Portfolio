import useInView from '../hooks/useInView.js';

// Fades content up once it scrolls into view. Delay is in ms.
const Reveal = ({ children, delay = 0, className = '', style, ...rest }) => {
    const [ref, inView] = useInView({ rootMargin: '-40px', once: true });

    return (
        <div
            ref={ref}
            className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
            style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Reveal;
