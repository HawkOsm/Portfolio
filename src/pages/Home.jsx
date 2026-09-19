import { useRef } from 'react';
import { Link } from '../router.jsx';
import Reveal from '../components/Reveal.jsx';
import MatrixRain from '../components/MatrixRain.jsx';
import TechBadge from '../components/TechBadge.jsx';
import Footer from '../sections/Footer.jsx';
import useHeroSnap from '../hooks/useHeroSnap.js';
import { hud, projects, experience, education, socials } from '../constants/index.js';

const github = socials.find((s) => s.name === 'GitHub');
const linkedin = socials.find((s) => s.name === 'LinkedIn');

// Home only teases two projects; the full set lives on the Projects page.
const homeProjectIds = ['kamikaze', 'clevo-linux'];
const homeProjects = homeProjectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

const Home = () => {
    const heroRef = useRef(null);
    const educationRef = useRef(null);
    useHeroSnap(heroRef, educationRef);

    return (
        <>
            <section ref={heroRef} className="relative overflow-hidden border-b border-line bg-ink">
                <MatrixRain className="absolute inset-0 w-full h-full block" />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 28% 45%, rgba(12,13,14,.94) 18%, rgba(12,13,14,.72) 45%, transparent 72%)' }}
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(180deg, rgba(12,13,14,.75), transparent 22%, transparent 72%, rgba(12,13,14,.9))' }}
                />

                <div className="relative container-site min-h-[calc(100vh-110px)] flex flex-col justify-between gap-8 py-10">
                    <Reveal className="flex items-center gap-3.5 flex-wrap font-mono text-[11.5px] tracking-[0.16em] uppercase text-muted">
                        <span className="flex items-center gap-2 text-accent">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                            inference · running
                        </span>
                        <span className="w-[26px] h-px bg-line" />
                        <span>Izmir, TR · 38.42°N 27.14°E</span>
                    </Reveal>

                    <Reveal className="flex-1 min-h-0 flex flex-col justify-center">
                        <h1
                            className="font-display font-bold leading-[1.06] tracking-[-0.04em] max-w-[16ch]"
                            style={{ fontSize: 'clamp(2rem, 6.5vw, 6rem)' }}
                        >
                            I build and <span className="text-accent">explore</span> software projects.
                        </h1>
                        <p className="mt-5 max-w-[46ch] text-base text-muted leading-[1.7]">
                            Computer Vision — Machine Learning — DevOps.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-7">
                            <Link href="/contact" className="btn-primary">Hire me →</Link>
                            <Link href="/about" className="btn-secondary">More about me</Link>
                        </div>
                    </Reveal>

                    <Reveal className="grid gap-px bg-line border border-line" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}>
                        {hud.map((h) => (
                            <div key={h.label} className="bg-ink/92 px-4 py-3 min-w-0">
                                <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted whitespace-nowrap overflow-hidden text-ellipsis">
                                    {h.label}
                                </div>
                                <div className="font-mono text-[13.5px] text-body mt-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
                                    {h.value}
                                </div>
                            </div>
                        ))}
                        <div className="bg-ink/92 px-4 py-3 min-w-0">
                            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted whitespace-nowrap overflow-hidden text-ellipsis">
                                Fast links
                            </div>
                            <div className="flex items-center gap-3.5 mt-1.5">
                                <a
                                    href={github.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="text-body hover:text-accent transition-colors"
                                >
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.2 9.3 7.7 10.8.1-.5.2-1.2.2-1.9v-2.3c-3 0-3.6-1.7-3.6-1.7-.6-1.3-1.4-1.7-1.4-1.7-1.1-.7 0-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .4.1 1 .2 1.9 4.5-1.5 7.7-5.8 7.7-10.8C23.5 5.7 18.3.5 12 .5z" />
                                    </svg>
                                </a>
                                <a
                                    href={linkedin.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="text-body hover:text-accent transition-colors"
                                >
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.5V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.3v6.3zM5.3 7.4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM7 20.4H3.5V9H7v11.4z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section
                id="education"
                ref={educationRef}
                className="container-site py-16 md:py-20 border-b border-line grid md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] gap-10 md:gap-16 items-start"
            >
                <Reveal>
                    <p className="eyebrow mb-3.5">Education</p>
                    <h2 className="font-display font-semibold text-[clamp(1.6rem,3.2vw,2.5rem)] tracking-[-0.03em] leading-[1.1]">
                        Studying,<br />exploring,<br />building.
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="grid sm:grid-cols-[minmax(0,170px)_minmax(0,1fr)] gap-4 sm:gap-10 border-t border-border pt-6">
                        <span className="text-xs tracking-[0.06em] text-faint pt-1.5">{education.period}</span>
                        <div>
                            <div className="font-display font-semibold text-[clamp(1.15rem,2vw,1.6rem)] tracking-[-0.01em]">
                                {education.org}
                            </div>
                            <div className="text-[15px] text-muted mt-2">{education.role}</div>
                            <p className="text-muted text-[15px] leading-[1.7] mt-3.5 max-w-[56ch]">
                                Third year, Software engineering students. Building projects, competing in hackathons, and interships simultaneously.
                            </p>
                            <div className="flex gap-4.5 items-center flex-wrap mt-5.5">
                                <Link href="/about" className="btn-primary !text-[14px] !px-6 !py-3">More about me →</Link>
                                <Link href="/about#certificates" className="text-sm text-muted hover:text-accent transition-colors">
                                    Certificates &amp; competitions
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section id="work">
                <Reveal className="flex justify-between items-baseline gap-6 container-site pt-16 md:pt-20 pb-6 flex-wrap">
                    <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,3rem)] tracking-[-0.03em] whitespace-nowrap">
                        Selected work
                    </h2>
                    <Link href="/projects" className="text-sm tracking-[0.06em] text-accent">All projects →</Link>
                </Reveal>
                {homeProjects.map((p) => (
                    <Reveal key={p.id}>
                        <Link
                            href={`/projects#${p.id}`}
                            className="row-link grid items-center container-site py-7 md:py-9"
                            style={{ gridTemplateColumns: '48px minmax(0,1.2fr) minmax(0,1fr) 40px', gap: 'clamp(14px,2.6vw,40px)' }}
                        >
                            <span className="font-display text-[13px] text-accent tracking-[0.08em]">{p.num}</span>
                            <div>
                                <div className="font-display font-semibold text-[clamp(1.2rem,2.2vw,1.85rem)] tracking-[-0.02em] leading-[1.12]">
                                    {p.title}
                                </div>
                                <div className="text-xs tracking-[0.1em] uppercase text-faint mt-2 mb-3.5">{p.tag}</div>
                                <div className="flex flex-wrap gap-x-4 gap-y-2">
                                    {p.logos.map((name) => (
                                        <TechBadge key={name} name={name} className="text-[13px] text-muted" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-muted text-[15px] leading-[1.65] max-md:hidden">{p.short}</p>
                            <span className="justify-self-end text-xl text-faint">→</span>
                        </Link>
                    </Reveal>
                ))}
                <div className="border-t border-line" />
            </section>

            <section
                id="log"
                className="container-site py-16 md:py-20 border-b border-line grid md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] gap-10 md:gap-16"
            >
                <Reveal>
                    <p className="eyebrow mb-3.5">Track record</p>
                    <h2 className="font-display font-semibold text-[clamp(1.6rem,3.2vw,2.5rem)] tracking-[-0.03em] mb-4">
                        Where I&apos;ve been
                    </h2>
                    <Link href="/about#experience" className="text-sm text-accent">Full experience log →</Link>
                </Reveal>
                <div className="flex flex-col">
                    {experience.map((entry) => (
                        <Reveal key={entry.id}>
                            <div className="grid sm:grid-cols-[minmax(0,170px)_minmax(0,1fr)] gap-4 sm:gap-10 py-6 border-t border-line">
                                <span className="text-xs tracking-[0.06em] text-faint pt-1.5">{entry.period}</span>
                                <div>
                                    <div className="font-display font-semibold text-[clamp(1.1rem,1.8vw,1.5rem)] tracking-[-0.01em]">
                                        {entry.org}
                                    </div>
                                    <div className="text-sm text-muted mt-1.5">{entry.role}</div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="relative overflow-hidden py-16 md:py-32 container-site text-center">
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{
                        bottom: '22%',
                        width: 'min(1000px, 90vw)',
                        height: 'min(600px, 60vw)',
                        background: 'radial-gradient(circle, rgba(94,230,196,.1), transparent 65%)',
                    }}
                />
                <Reveal className="relative">
                    <p className="eyebrow mb-5">Open to work</p>
                    <h2
                        className="font-display font-bold tracking-[-0.04em] leading-none mx-auto mb-5 max-w-[16ch]"
                        style={{ fontSize: 'clamp(2rem, 6vw, 4.75rem)' }}
                    >
                        Let&apos;s build together.
                    </h2>
                    <p className="text-muted text-base leading-[1.75] mx-auto mb-8 max-w-[52ch]">
                        Internships, junior roles, or any type of project, I&apos;m here to help.
                    </p>
                    <Link href="/contact" className="btn-primary">Start a conversation →</Link>
                </Reveal>
            </section>

            <Footer />
        </>
    );
};
export default Home;
