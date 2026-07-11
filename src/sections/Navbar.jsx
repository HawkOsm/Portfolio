import { useState } from 'react';
import { navLinks, CV_PATH } from '../constants/index.js';

const NavItems = ({ onLinkClick }) => (
    <ul className="flex max-sm:flex-col items-center gap-1 sm:gap-7">
        {navLinks.map(({ id, href, name }) => (
            <li key={id} className="max-sm:w-full">
                <a
                    href={href}
                    onClick={onLinkClick}
                    className="block font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-paper transition-colors py-2 max-sm:px-2 max-sm:text-center"
                >
                    {name}
                </a>
            </li>
        ))}
        <li className="max-sm:w-full max-sm:mt-2">
            <a
                href={CV_PATH}
                download
                className="block font-mono text-xs uppercase tracking-[0.2em] text-ink bg-buff hover:bg-paper transition-colors px-4 py-2 text-center"
            >
                CV — PDF
            </a>
        </li>
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-ink/85 backdrop-blur-sm border-b border-line">
            <div className="container-site flex justify-between items-center py-4">
                <a href="#top" className="font-display font-semibold uppercase text-lg tracking-wide text-paper">
                    Osman Şahin Güler
                </a>

                <button
                    onClick={() => setIsOpen((v) => !v)}
                    className="sm:hidden font-mono text-xs uppercase tracking-widest text-muted hover:text-paper"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>

                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
            </div>

            <div
                className={`sm:hidden overflow-hidden transition-all duration-300 border-t border-line bg-ink ${
                    isOpen ? 'max-h-96' : 'max-h-0 border-t-0'
                }`}
            >
                <nav className="container-site py-4">
                    <NavItems onLinkClick={() => setIsOpen(false)} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
