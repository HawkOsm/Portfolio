import Compass from '../components/Compass.jsx';
import { heroFacts, CV_PATH } from '../constants/index.js';

const Hero = () => {
    return (
        <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* compass — the one decorative element on the page */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-40 lg:-right-24 xl:right-0 w-[520px] h-[520px] max-lg:w-[420px] max-lg:h-[420px] max-sm:w-[360px] max-sm:h-[360px] max-lg:opacity-40 text-paper pointer-events-none select-none">
                <Compass className="w-full h-full" />
            </div>

            <div className="container-site relative z-10 pt-28 pb-16 w-full">
                <p className="font-mono text-xs tracking-[0.25em] uppercase mb-6 flex items-center gap-3 flex-wrap">
                    <span className="inline-block w-2 h-2 bg-signal" aria-hidden="true" />
                    <span className="text-paper">Osman Şahin Güler</span>
                    <span className="text-muted">· Open to remote work &amp; internships</span>
                </p>

                <h1 className="font-display font-bold uppercase leading-[0.95] text-paper"
                    style={{ fontSize: 'clamp(3.25rem, 9vw, 7rem)' }}>
                    I teach machines
                    <br />
                    <span className="text-buff">to see.</span>
                </h1>

                <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
                    Software engineering student in Izmir. I build autonomous kamikaze missions
                    for fixed-wing competition UAVs — vision-guided dives, MAVLink guidance, and
                    the edge hardware they run on. I learn by shipping real systems, not toy demos.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a href="#work" className="btn-primary">Selected work ↓</a>
                    <a href={CV_PATH} download className="btn-ghost">Download CV</a>
                </div>
            </div>

            {/* instrument strip */}
            <div className="relative z-10 hairline-t">
                <div className="container-site grid grid-cols-2 lg:grid-cols-4">
                    {heroFacts.map(({ label, value }, i) => (
                        <div
                            key={label}
                            className={`py-4 pr-6 font-mono text-xs text-muted flex gap-3 ${
                                i > 0 ? 'lg:border-l lg:border-line lg:pl-6' : ''
                            }`}
                        >
                            <span className="text-signal">{label}</span>
                            <span className="text-paper/80">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
