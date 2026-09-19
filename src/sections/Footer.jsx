import { Link } from '../router.jsx';
import { socials } from '../constants/index.js';

// Home shows the social row; every other page shows one contextual link instead
// (see each page's own <Footer link={{...}} />).
const Footer = ({ link }) => (
    <footer className="border-t border-line">
        <div className="container-site py-[22px] flex flex-wrap justify-between items-center gap-5 text-xs text-faint">
            <span>© 2026 Osman Şahin Güler</span>
            {link ? (
                <Link href={link.href} className="text-[13px] text-muted hover:text-accent transition-colors">
                    {link.label}
                </Link>
            ) : (
                <div className="flex gap-[22px] items-center flex-wrap">
                    {socials.map(({ name, href }) => (
                        <a
                            key={name}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-[13px] text-muted hover:text-accent transition-colors"
                        >
                            {name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    </footer>
);

export default Footer;
