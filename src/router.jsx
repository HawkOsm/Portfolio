import { createContext, useContext, useEffect, useState } from 'react';

const RouterContext = createContext(null);

const getLocation = () => ({ pathname: window.location.pathname, hash: window.location.hash });

export const RouterProvider = ({ children }) => {
    const [location, setLocation] = useState(getLocation);

    useEffect(() => {
        const onPopState = () => setLocation(getLocation());
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, []);

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.slice(1);
            requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    const navigate = (href) => {
        const url = new URL(href, window.location.origin);
        window.history.pushState({}, '', url.pathname + url.hash);
        setLocation({ pathname: url.pathname, hash: url.hash });
    };

    return <RouterContext.Provider value={{ location, navigate }}>{children}</RouterContext.Provider>;
};

export const useRouter = () => useContext(RouterContext);

// Internal links (starting with "/") go through pushState navigation.
// Anything else (mailto:, http(s):, #anchors on the same page) behaves like a normal <a>.
export const Link = ({ href, className, children, onClick, ...rest }) => {
    const { navigate } = useRouter();
    const isInternal = href.startsWith('/');

    const handleClick = (e) => {
        onClick?.(e);
        if (!isInternal || e.defaultPrevented) return;
        e.preventDefault();
        navigate(href);
    };

    return (
        <a href={href} className={className} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
};
