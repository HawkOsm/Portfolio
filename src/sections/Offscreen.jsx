import Reveal from '../components/Reveal.jsx';
import { offscreen } from '../constants/index.js';

// Wind streaks — the only other place the nautical motif appears.
// Sits in the empty space to the right of the section heading.
const WindLines = () => (
    <svg
        className="hidden md:block absolute right-0 bottom-4 w-[360px] h-[110px] text-paper/40 pointer-events-none select-none"
        viewBox="0 0 360 110"
        aria-hidden="true"
        fill="none"
    >
        {[
            'M 0 28 C 120 18, 240 34, 360 22',
            'M 40 58 C 150 48, 260 64, 360 54',
            'M 90 88 C 190 80, 280 94, 360 84',
        ].map((d, i) => (
            <path
                key={d}
                className="wind-line"
                d={d}
                stroke="currentColor"
                strokeWidth="1.2"
                style={{ animationDelay: `${i * -1.7}s` }}
            />
        ))}
    </svg>
);

const Offscreen = () => (
    <section id="offscreen" className="container-site pt-24 pb-10">
        <Reveal className="relative">
            <WindLines />
            <p className="eyebrow mb-3">Off screen</p>
            <h2 className="section-head mb-10">Sea, sweat &amp; subtitles</h2>
        </Reveal>

        <div className="hairline-t">
            <div className="grid md:grid-cols-3">
                {offscreen.map((item, i) => (
                    <Reveal key={item.title} delay={i * 80} className="py-10 pr-8 md:border-l md:border-line md:pl-8 md:first:border-l-0 md:first:pl-0">
                        <h3 className="font-display font-semibold uppercase text-2xl text-paper mb-4">{item.title}</h3>
                        <p className="text-muted leading-relaxed">{item.detail}</p>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Offscreen;
