import { useState } from 'react';
import { Link, useRouter } from '../router.jsx';
import { CV_PATH } from '../constants/index.js';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

const NavItems = ({ pathname, onLinkClick }) => (
    <ul className="flex max-sm:flex-col items-center gap-1 sm:gap-6">
        {navLinks.map(({ href, name }) => (
            <li key={href} className="max-sm:w-full">
                <Link
                    href={href}
                    onClick={onLinkClick}
                    className={`block text-[13px] transition-colors py-2 max-sm:px-2 max-sm:text-center ${
                        pathname === href ? 'text-paper' : 'text-muted hover:text-paper'
                    }`}
                >
                    {name}
                </Link>
            </li>
        ))}
        <li className="max-sm:w-full max-sm:mt-2">
            <a
                href={CV_PATH}
                download
                className="block text-[13px] font-medium text-ink bg-accent rounded-full px-[18px] py-[9px] text-center hover:bg-accent-hover transition-colors whitespace-nowrap"
            >
                Request CV
            </a>
        </li>
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { location } = useRouter();

    return (
        <header
            data-site-header
            className="sticky top-0 z-50 bg-ink/82 backdrop-blur-[12px] border-b border-line"
        >
            <div className="container-site flex justify-between items-center gap-6 py-[15px]">
                <Link href="/" className="font-display font-semibold text-[15px] tracking-tight whitespace-nowrap shrink-0">
                    Osman Şahin Güler
                </Link>

                <button
                    onClick={() => setIsOpen((v) => !v)}
                    className="sm:hidden text-[13px] font-medium text-muted hover:text-paper"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>

                <nav className="hidden sm:block">
                    <NavItems pathname={location.pathname} />
                </nav>
            </div>

            <div
                className={`sm:hidden overflow-hidden transition-all duration-300 border-t border-line bg-ink ${
                    isOpen ? 'max-h-96' : 'max-h-0 border-t-0'
                }`}
            >
                <nav className="container-site py-4">
                    <NavItems pathname={location.pathname} onLinkClick={() => setIsOpen(false)} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
