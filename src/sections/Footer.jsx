import { socials } from '../constants/index.js';

const Footer = () => (
    <footer className="hairline-t">
        <div className="container-site py-8 flex flex-wrap justify-between items-center gap-4">
            <p className="font-mono text-xs text-muted">
                © 2026 Osman Şahin Güler · 38.42°N 27.14°E
            </p>
            <div className="flex gap-6">
                {socials.map(({ name, href }) => (
                    <a
                        key={name}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-paper transition-colors"
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    </footer>
);

export default Footer;
