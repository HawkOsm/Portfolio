import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';

import App from '../App.jsx';
import { projects, experience, certificates } from '../constants/index.js';
import * as tr from '../i18n/content.tr.js';
import { ui } from '../i18n/ui.js';

const keysOf = (o, prefix = '') =>
    Object.entries(o).flatMap(([k, v]) =>
        v && typeof v === 'object' && !Array.isArray(v) ? keysOf(v, `${prefix}${k}.`) : [`${prefix}${k}`]
    );

describe('translations', () => {
    it('Turkish UI has every key English has', () => {
        expect(keysOf(ui.tr).sort()).toEqual(keysOf(ui.en).sort());
    });

    it('Turkish content covers every project, experience entry and its list lengths', () => {
        for (const p of projects) {
            const o = tr.projects[p.id];
            expect(o, p.id).toBeDefined();
            if (p.built) expect(o.built.length, p.id).toBe(p.built.length);
            if (p.sections) expect(o.sections.length, p.id).toBe(p.sections.length);
        }
        for (const e of experience) expect(tr.experience[e.id].notes.length).toBe(e.notes.length);
        for (const id of Object.keys(tr.certificates)) expect(certificates.some((c) => c.id === id)).toBe(true);
    });
});

describe('language switch', () => {
    beforeEach(() => {
        window.localStorage.clear();
        // /contact avoids the Home hero, which needs canvas and matchMedia that jsdom lacks.
        window.history.pushState({}, '', '/contact');
    });

    it('switches the page to Turkish, persists it and sets <html lang>', async () => {
        const user = userEvent.setup();
        render(<App />);

        expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
        await user.click(screen.getAllByRole('button', { name: 'tr' })[0]);

        expect(screen.getByRole('button', { name: /mesajı gönder/i })).toBeInTheDocument();
        expect(document.documentElement.lang).toBe('tr');
        expect(window.localStorage.getItem('lang')).toBe('tr');
    });
});
