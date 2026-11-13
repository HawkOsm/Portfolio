import { useContext } from 'react';
import { LanguageContext } from './context.js';

const useLang = () => useContext(LanguageContext);
export default useLang;
