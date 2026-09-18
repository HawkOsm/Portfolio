import { useRef } from 'react';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../constants/index.js';

const ProjectCard = ({ project }) => (
    <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group shrink-0 w-[85vw] sm:w-[440px] snap-start"
    >
        <div className="aspect-[4/3] overflow-hidden bg-panel border border-line flex items-center justify-center">
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            ) : (
                <div className="flex flex-wrap items-center justify-center gap-6 px-8">
                    {project.stack.filter((tech) => tech.icon).map((tech) => (
                        <img
                            key={tech.name}
                            src={tech.icon}
                            alt={tech.name}
                            title={tech.name}
                            className={`w-12 h-12 object-contain opacity-80 transition-transform duration-500 group-hover:scale-110 ${tech.invert ? 'invert' : ''}`}
                            loading="lazy"
                        />
                    ))}
                </div>
            )}
        </div>
        <p className="font-mono text-sm uppercase tracking-widest text-signal mt-4">{project.tag}</p>
        <h3 className="font-display font-semibold uppercase text-2xl text-paper mt-1 group-hover:text-buff transition-colors">
            {project.title}
            <span className="text-muted text-lg align-super ml-2" aria-hidden="true">↗</span>
        </h3>
        <p className="mt-2 text-muted text-base leading-relaxed">{project.body}</p>

        <div className="flex flex-wrap gap-2 mt-3">
            {project.stack.map((tech) => (
                <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 border border-line px-2 py-1 font-mono text-xs uppercase tracking-wide text-muted"
                >
                    {tech.icon && (
                        <img
                            src={tech.icon}
                            alt=""
                            className={`w-3.5 h-3.5 object-contain ${tech.invert ? 'invert' : ''}`}
                            loading="lazy"
                        />
                    )}
                    {tech.name}
                </span>
            ))}
        </div>
    </a>
);

const Work = () => {
    const scrollerRef = useRef(null);

    const scroll = (direction) => {
        const node = scrollerRef.current;
        if (!node) return;
        node.scrollBy({ left: direction * node.clientWidth * 0.9, behavior: 'smooth' });
    };

    return (
        <section id="work" className="container-site pt-24 pb-10">
            <Reveal>
                <p className="eyebrow mb-3">Projects</p>
            </Reveal>

            <Reveal>
                <div>
                    <div className="flex gap-2 mb-6">
                        <button
                            type="button"
                            onClick={() => scroll(-1)}
                            aria-label="Previous project"
                            className="w-10 h-10 flex items-center justify-center border border-line text-paper hover:border-signal hover:text-signal transition-colors"
                        >
                            ←
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll(1)}
                            aria-label="Next project"
                            className="w-10 h-10 flex items-center justify-center border border-line text-paper hover:border-signal hover:text-signal transition-colors"
                        >
                            →
                        </button>
                    </div>

                    <div
                        ref={scrollerRef}
                        className="flex gap-8 overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default Work;
