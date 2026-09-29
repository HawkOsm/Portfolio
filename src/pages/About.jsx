import { Link } from '../router.jsx';
import Reveal from '../components/Reveal.jsx';
import Footer from '../sections/Footer.jsx';
import { education, experience, certificates, instruments } from '../constants/index.js';

const About = () => (
    <>
        <section className="container-site py-16 md:py-24 border-b border-line grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
            <Reveal>
                <img
                    src="/assets/portrait.png"
                    alt="Osman Sahin Guler"
                    className="w-full max-w-[440px] h-auto select-none"
                    style={{
                        WebkitMaskImage:
                            'linear-gradient(to bottom, black 72%, transparent 96%), radial-gradient(ellipse 72% 68% at 50% 40%, black 50%, transparent 100%)',
                        maskImage:
                            'linear-gradient(to bottom, black 72%, transparent 96%), radial-gradient(ellipse 72% 68% at 50% 40%, black 50%, transparent 100%)',
                        WebkitMaskComposite: 'source-in',
                        maskComposite: 'intersect',
                    }}
                    draggable="false"
                />
            </Reveal>
            <Reveal>
                <p className="eyebrow mb-6">About</p>
                <h1
                    className="font-display font-bold leading-[0.96] tracking-[-0.035em] mb-8"
                    style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)' }}
                >
                    Curious how things work,<br />and <span className="text-accent">why they break.</span>
                </h1>
                <div className="flex flex-col gap-5 max-w-[52ch]">
                    <p className="text-muted leading-[1.75] text-base">
                        I&apos;m a 3rd-year software engineering student at Yaşar University in Izmir.
                        I build things end to end, and I&apos;m exploring machine learning alongside.
                        I spent a year at CLB Automation
                        prototyping computer-vision tools for industrial lines, and I&apos;ve worked on
                        autonomous flight and vision software for a competition drone. Both taught me
                        what software looks like once it has to run outside a demo, and both left me
                        curious about the models underneath it.
                    </p>
                    <p className="text-muted leading-[1.75] text-base">
                        I learn by building what I actually need, and by taking things apart until I
                        understand why they behave the way they do. I&apos;d rather spend a week
                        chasing down a bug than paper over it, because that is where most of the real
                        learning happens. Machine learning is the part I&apos;m most curious about: I want to
                        understand how a model is trained and why it&apos;s still wrong in
                        production, not just call its API.
                    </p>
                </div>
            </Reveal>
        </section>

        <section id="education" className="container-site py-14 md:py-18 border-b border-line grid md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] gap-8 md:gap-16">
            <Reveal>
                <h2 className="font-display font-semibold text-[clamp(1.4rem,2.4vw,2rem)] tracking-[-0.02em]">Education</h2>
            </Reveal>
            <Reveal className="grid sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)] gap-4 sm:gap-10">
                <span className="text-xs tracking-[0.06em] text-faint pt-1.5">{education.period}</span>
                <div>
                    <div className="font-display font-semibold text-[clamp(1.1rem,1.8vw,1.5rem)] tracking-[-0.01em]">
                        {education.org}
                    </div>
                    <p className="text-muted mt-2 leading-[1.7] text-[15px]">
                        {education.role} — {education.notes}
                    </p>
                </div>
            </Reveal>
        </section>

        <section id="experience" className="container-site py-14 md:py-18 border-b border-line grid md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] gap-8 md:gap-16">
            <Reveal>
                <h2 className="font-display font-semibold text-[clamp(1.4rem,2.4vw,2rem)] tracking-[-0.02em] md:sticky md:top-24 self-start">
                    Experience
                </h2>
            </Reveal>
            <div className="flex flex-col gap-11">
                {experience.map((entry) => (
                    <Reveal key={entry.id} className="grid sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)] gap-4 sm:gap-10">
                        <span className="text-xs tracking-[0.06em] text-faint pt-1.5">{entry.period}</span>
                        <div>
                            <div className="font-display font-semibold text-[clamp(1.1rem,1.8vw,1.5rem)] tracking-[-0.01em]">
                                {entry.org}
                            </div>
                            <div className="text-xs uppercase tracking-[0.08em] text-accent mt-2 mb-4.5">
                                {entry.role}
                            </div>
                            <ul className="flex flex-col gap-2.5 max-w-[72ch]">
                                {entry.notes.map((note) => (
                                    <li key={note} className="text-body leading-[1.7] text-[15px] pl-4.5 relative">
                                        <span className="absolute left-0 top-[0.7em] w-2 h-px bg-faint" aria-hidden="true" />
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>

        <section id="skills" className="container-site py-14 md:py-18 border-b border-line grid md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] gap-8 md:gap-16">
            <Reveal>
                <h2 className="font-display font-semibold text-[clamp(1.4rem,2.4vw,2rem)] tracking-[-0.02em]">What I work with</h2>
            </Reveal>
            <div className="grid gap-9 gap-x-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                {instruments.map((group, i) => (
                    <Reveal key={group.group} delay={i * 60}>
                        <h3 className="text-xs uppercase tracking-[0.1em] text-accent mb-3.5">{group.group}</h3>
                        <ul className="flex flex-col gap-2">
                            {group.items.map((item) => (
                                <li key={item} className="text-body text-[15px]">{item}</li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
        </section>

        <section id="certificates" className="container-site py-14 md:py-18 border-b border-line grid md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] gap-8 md:gap-16">
            <Reveal>
                <h2 className="font-display font-semibold text-[clamp(1.4rem,2.4vw,2rem)] tracking-[-0.02em]">Certificates</h2>
            </Reveal>
            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                {certificates.map((cert, i) => (
                    <Reveal key={cert.id} delay={i * 40}>
                        <a href={cert.image} target="_blank" rel="noopener noreferrer" className="card p-3.5">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full aspect-[4/3] object-contain bg-ink rounded-lg mb-3.5"
                                loading="lazy"
                            />
                            <span className="text-[11px] tracking-[0.06em] text-faint">{cert.date}</span>
                            <div className="font-display font-semibold text-[15px] mt-1">{cert.title}</div>
                            <p className="text-muted text-[13px] mt-1 leading-[1.5]">{cert.org}</p>
                        </a>
                    </Reveal>
                ))}
            </div>
        </section>

        <section className="container-site py-16 md:py-24 grid sm:grid-cols-[minmax(0,1fr)_auto] gap-10 items-center">
            <Reveal>
                <h2
                    className="font-display font-bold tracking-[-0.03em] leading-[1.05] max-w-[20ch]"
                    style={{ fontSize: 'clamp(1.8rem, 4.4vw, 3.5rem)' }}
                >
                    Think I&apos;d fit your team?
                </h2>
            </Reveal>
            <Reveal className="sm:justify-self-end">
                <Link href="/contact" className="btn-primary whitespace-nowrap">Get in touch →</Link>
            </Reveal>
        </section>

        <Footer link={{ href: '/projects', label: 'See the projects →' }} />
    </>
);

export default About;
