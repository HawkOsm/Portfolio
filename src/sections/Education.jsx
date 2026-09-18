import { useRef } from 'react';
import Reveal from '../components/Reveal.jsx';
import { education, certificates } from '../constants/index.js';

const CertificateCard = ({ cert }) => (
    <a
        href={cert.image}
        target="_blank"
        rel="noopener noreferrer"
        className="group shrink-0 w-[85vw] sm:w-[440px] snap-start"
    >
        <div className="aspect-[4/3] overflow-hidden bg-panel border border-line flex items-center justify-center">
            <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
            />
        </div>
        <p className="font-mono text-sm uppercase tracking-widest text-signal mt-4">{cert.date}</p>
        <h3 className="font-display font-semibold uppercase text-2xl text-paper mt-1 group-hover:text-buff transition-colors">
            {cert.title}
        </h3>
        <p className="text-muted text-base mt-1">{cert.org}</p>
    </a>
);

const Education = () => {
    const scrollerRef = useRef(null);

    const scroll = (direction) => {
        const node = scrollerRef.current;
        if (!node) return;
        node.scrollBy({ left: direction * node.clientWidth * 0.9, behavior: 'smooth' });
    };

    return (
        <section id="education" className="container-site pt-24 pb-10">
            <Reveal>
                <p className="eyebrow mb-3">Education</p>
                <h2 className="section-head mb-10">My studies & certificates</h2>
            </Reveal>

            <Reveal>
                <div className="hairline-t grid md:grid-cols-[220px_1fr] gap-4 md:gap-8 py-10">
                    <p className="font-mono text-sm tracking-widest text-signal pt-1">{education.period}</p>
                    <div>
                        <h3 className="font-display font-semibold uppercase text-3xl text-paper">{education.org}</h3>
                        <p className="font-mono text-sm uppercase tracking-widest text-muted mt-2">{education.role}</p>
                        <p className="mt-4 text-muted text-base leading-relaxed max-w-2xl">{education.notes}</p>
                    </div>
                </div>
            </Reveal>

            <Reveal>
                <div>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => scroll(-1)}
                            aria-label="Previous certificate"
                            className="w-10 h-10 flex items-center justify-center border border-line text-paper hover:border-signal hover:text-signal transition-colors"
                        >
                            ←
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll(1)}
                            aria-label="Next certificate"
                            className="w-10 h-10 flex items-center justify-center border border-line text-paper hover:border-signal hover:text-signal transition-colors"
                        >
                            →
                        </button>
                    </div>

                    <div
                        ref={scrollerRef}
                        className="flex gap-8 overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {certificates.map((cert) => (
                            <CertificateCard key={cert.id} cert={cert} />
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default Education;
