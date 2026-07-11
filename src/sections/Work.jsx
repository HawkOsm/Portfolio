import Reveal from '../components/Reveal.jsx';
import { projects } from '../constants/index.js';

const ProjectRow = ({ project, index }) => {
    const inner = (
        <div className="grid md:grid-cols-[64px_1fr_240px] gap-4 md:gap-8 py-10 group-hover:bg-panel/60 transition-colors md:px-6 md:-mx-6">
            <p className="font-mono text-sm text-signal pt-1">{project.code}</p>

            <div>
                <h3 className="font-display font-semibold uppercase text-2xl sm:text-3xl text-paper group-hover:text-buff transition-colors">
                    {project.title}
                    {project.link && <span className="text-muted text-xl align-super ml-2" aria-hidden="true">↗</span>}
                </h3>
                <p className="mt-4 text-muted leading-relaxed max-w-2xl">{project.body}</p>
            </div>

            <div className="flex md:flex-col flex-wrap gap-x-6 gap-y-2 md:pt-1 md:text-right">
                {project.facts.map((fact) => (
                    <p key={fact} className="font-mono text-xs text-paper/70">{fact}</p>
                ))}
                <p className="font-mono text-xs uppercase tracking-widest text-muted/70 md:mt-auto">{project.tag}</p>
            </div>
        </div>
    );

    return (
        <Reveal delay={index * 60}>
            <div className="hairline-t group">
                {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                        {inner}
                    </a>
                ) : (
                    inner
                )}
            </div>
        </Reveal>
    );
};

const Work = () => (
    <section id="work" className="container-site pt-24 pb-10">
        <Reveal>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="section-head mb-10">Built, flown, shipped</h2>
        </Reveal>

        <div>
            {projects.map((project, i) => (
                <ProjectRow key={project.id} project={project} index={i} />
            ))}
        </div>
    </section>
);

export default Work;
