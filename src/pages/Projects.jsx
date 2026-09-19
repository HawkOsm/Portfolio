import { useEffect, useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import TechBadge from '../components/TechBadge.jsx';
import Footer from '../sections/Footer.jsx';
import { projects } from '../constants/index.js';

const ProjectOverlay = ({ project, onClose }) => {
    useEffect(() => {
        if (!project) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [project, onClose]);

    if (!project) return null;
    const p = project;

    return (
        <div
            className="fixed inset-0 z-50 overflow-y-auto bg-ink/90 backdrop-blur-sm"
            onClick={onClose}
            role="presentation"
        >
            <div className="min-h-full flex items-start justify-center py-10 px-4 md:py-16">
                <div
                    className="relative w-full max-w-[880px] bg-panel border border-line rounded-3xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                    aria-label={p.title}
                >
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 rounded-full bg-ink/70 border border-border flex items-center justify-center text-paper hover:border-accent hover:text-accent transition-colors"
                    >
                        ✕
                    </button>

                    <div className="p-6 md:p-10 pt-14 md:pt-16">
                        <div className="flex items-center gap-3.5 mb-4.5">
                            <span className="font-display text-[13px] text-accent tracking-[0.08em]">{p.num}</span>
                            <span className="w-7 h-px bg-border" />
                            <span className="text-xs tracking-[0.12em] uppercase text-faint">{p.tag} · {p.year}</span>
                        </div>
                        <h2
                            className="font-display font-bold tracking-[-0.03em] leading-[1.05] mb-4.5"
                            style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.5rem)' }}
                        >
                            {p.title}
                        </h2>
                        <p className="text-body leading-[1.75] text-base mb-5.5 max-w-[60ch]">{p.body}</p>
                        <div className="flex flex-wrap gap-2 mb-6.5">
                            {p.stack.map((t) => (
                                <TechBadge key={t} name={t} className="tag" />
                            ))}
                        </div>
                        <div className="flex gap-4.5 items-center flex-wrap mb-8">
                            <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary !text-[14px] !px-6 !py-3">
                                View on GitHub ↗
                            </a>
                            <span className="text-[13px] text-faint">Role: {p.role}</span>
                        </div>

                        <div className="flex flex-col gap-6.5">
                            <div>
                                <h3 className="text-xs tracking-[0.14em] uppercase text-accent mb-3">The problem</h3>
                                <p className="text-body leading-[1.75] text-[15px]">{p.problem}</p>
                            </div>
                            <div>
                                <h3 className="text-xs tracking-[0.14em] uppercase text-accent mb-3">What I built</h3>
                                <ul className="flex flex-col gap-2.5">
                                    {p.built.map((b) => (
                                        <li key={b} className="text-body leading-[1.7] text-[15px] pl-4.5 relative">
                                            <span className="absolute left-0 top-[0.72em] w-2 h-px bg-faint" aria-hidden="true" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {p.todo.length > 0 && (
                                <div className="border border-dashed border-[#3a3d42] rounded-xl px-5 py-4.5">
                                    <div className="text-[11px] tracking-[0.14em] uppercase text-warn mb-2">TODO — fill in</div>
                                    <ul className="flex flex-col gap-1.5">
                                        {p.todo.map((t) => (
                                            <li key={t} className="text-muted text-sm leading-[1.6]">{t}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [activeId, setActiveId] = useState(null);

    // Support deep links like /projects#kamikaze (used by the Home page row links)
    // by opening the matching overlay on load, then clearing the hash so it doesn't
    // linger or interact with the router's own scroll handling.
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (id && projects.some((p) => p.id === id)) {
            setActiveId(id);
            window.history.replaceState({}, '', window.location.pathname);
        }
    }, []);

    const activeProject = projects.find((p) => p.id === activeId) ?? null;

    return (
        <>
            <section className="container-site py-16 md:py-24 border-b border-line grid lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] gap-8 lg:gap-20 items-end">
                <Reveal>
                    <p className="eyebrow mb-6">Projects</p>
                    <h1
                        className="font-display font-bold leading-[0.94] tracking-[-0.04em]"
                        style={{ fontSize: 'clamp(2.4rem, 6.4vw, 5.25rem)' }}
                    >
                        Things I built,<br />and why.
                    </h1>
                </Reveal>
                <Reveal>
                    <p className="text-muted leading-[1.75] text-base max-w-[46ch]">
                        Each one started as a problem I actually had — a drone that needed to find its own
                        target, a reading habit that needed fixing, a laptop that wouldn&apos;t boot Linux.
                        Tap any card for the full story.
                    </p>
                </Reveal>
            </section>

            <section className="container-site py-14 md:py-20">
                <div className="grid sm:grid-cols-2 gap-5 md:gap-7">
                    {projects.map((p) => (
                        <Reveal key={p.id}>
                            <button
                                type="button"
                                onClick={() => setActiveId(p.id)}
                                className="card w-full h-full text-left p-6 md:p-7 group"
                            >
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="font-display text-[12px] text-accent tracking-[0.08em]">{p.num}</span>
                                        <span className="text-[11px] text-faint">{p.year}</span>
                                    </div>
                                    <span className="text-xs tracking-[0.1em] uppercase text-faint text-right">{p.tag}</span>
                                </div>
                                <h2 className="font-display font-semibold text-[clamp(1.15rem,1.8vw,1.5rem)] tracking-[-0.02em] leading-[1.15] mb-2.5 group-hover:text-accent transition-colors">
                                    {p.title}
                                </h2>
                                <p className="text-muted text-sm leading-[1.6] mb-4 max-w-[42ch]">{p.short}</p>
                                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
                                    {p.logos.map((name) => (
                                        <TechBadge key={name} name={name} className="text-[13px] text-muted" />
                                    ))}
                                </div>
                                <span className="text-[13px] text-faint group-hover:text-accent transition-colors">View details →</span>
                            </button>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="container-site py-16 md:py-24 grid sm:grid-cols-[minmax(0,1fr)_auto] gap-9 items-center border-t border-line">
                <Reveal>
                    <h2
                        className="font-display font-bold tracking-[-0.03em] leading-[1.05] max-w-[20ch]"
                        style={{ fontSize: 'clamp(1.8rem, 4.4vw, 3.5rem)' }}
                    >
                        More of it lives on GitHub.
                    </h2>
                </Reveal>
                <Reveal className="sm:justify-self-end">
                    <a href="https://github.com/HawkOsm" target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap">
                        github.com/HawkOsm ↗
                    </a>
                </Reveal>
            </section>

            <Footer link={{ href: '/contact', label: 'Get in touch →' }} />

            <ProjectOverlay project={activeProject} onClose={() => setActiveId(null)} />
        </>
    );
};

export default Projects;
