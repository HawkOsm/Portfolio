import { createContext } from 'react';
import { ui, DEFAULT_LANG } from './ui.js';

// Default value = English, so components still render (and tests still pass) without a provider.
export const LanguageContext = createContext({ lang: DEFAULT_LANG, setLang: () => {}, t: ui[DEFAULT_LANG] });
