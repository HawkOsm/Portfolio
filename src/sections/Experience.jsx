import Reveal from '../components/Reveal.jsx';
import { missionLog } from '../constants/index.js';

const Experience = () => (
    <section id="log" className="container-site pt-24 pb-10">
        <Reveal>
            <p className="eyebrow mb-3">Experience</p>
            <h2 className="section-head mb-10">Where I&apos;ve worked</h2>
        </Reveal>

        <div>
            {missionLog.map((entry, i) => (
                <Reveal key={entry.id} delay={i * 60}>
                    <article className="hairline-t grid md:grid-cols-[220px_1fr] gap-4 md:gap-8 py-10">
                        <p className="font-mono text-xs tracking-widest text-signal pt-1">{entry.period}</p>
                        <div>
                            <h3 className="font-display font-semibold uppercase text-2xl text-paper">{entry.org}</h3>
                            <p className="font-mono text-xs uppercase tracking-widest text-muted mt-2">{entry.role}</p>
                            <ul className="mt-5 space-y-2 max-w-2xl">
                                {entry.notes.map((note) => (
                                    <li key={note} className="text-muted leading-relaxed pl-5 relative">
                                        <span className="absolute left-0 top-[0.7em] w-2 h-px bg-signal" aria-hidden="true" />
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                </Reveal>
            ))}
        </div>
    </section>
);

export default Experience;
