import Reveal from '../components/Reveal.jsx';
import { instruments } from '../constants/index.js';

const Skills = () => (
    <section id="skills" className="container-site pt-24 pb-10">
        <Reveal>
            <p className="eyebrow mb-3">Instruments</p>
            <h2 className="section-head mb-10">What I work with</h2>
        </Reveal>

        <div className="hairline-t grid sm:grid-cols-2 lg:grid-cols-4">
            {instruments.map((group, i) => (
                <Reveal key={group.group} delay={i * 60} className="py-8 pr-8 lg:border-l lg:border-line lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-buff mb-5">{group.group}</h3>
                    <ul className="space-y-2">
                        {group.items.map((item) => (
                            <li key={item} className="text-muted">{item}</li>
                        ))}
                    </ul>
                </Reveal>
            ))}
        </div>
    </section>
);

export default Skills;
