import { useCallback, useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './context.js';
import { DEFAULT_LANG, LANGS, ui } from './ui.js';

const STORAGE_KEY = 'lang';

const detectLang = () => {
    try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (LANGS.includes(saved)) return saved;
    } catch {
        // storage can be blocked; fall through to the browser language
    }
    const nav = (window.navigator.language || '').slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : DEFAULT_LANG;
};

// Fill any key missing from a language with its English value, so an unfinished
// translation never renders `undefined`.
const withFallback = (base, over) =>
    Object.fromEntries(
        Object.entries(base).map(([k, v]) => [
            k,
            v && typeof v === 'object' && !Array.isArray(v) ? withFallback(v, over?.[k]) : over?.[k] ?? v,
        ])
    );

export const LanguageProvider = ({ children }) => {
    const [lang, setLangState] = useState(detectLang);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const setLang = useCallback((next) => {
        if (!LANGS.includes(next)) return;
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // ignore
        }
    }, []);

    const value = useMemo(() => ({ lang, setLang, t: withFallback(ui[DEFAULT_LANG], ui[lang]) }), [lang, setLang]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
