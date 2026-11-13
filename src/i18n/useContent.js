import { useMemo } from 'react';
import useLang from './useLang.js';
import * as base from '../constants/index.js';
import * as tr from './content.tr.js';

const overrides = { tr };

const localizeProject = (p, o) => {
    if (!o) return p;
    const { videoLabel, imageAlt, ...rest } = o;
    return {
        ...p,
        ...rest,
        ...(videoLabel && p.video ? { video: { ...p.video, label: videoLabel } } : {}),
        ...(imageAlt && p.image ? { image: { ...p.image, alt: imageAlt } } : {}),
    };
};

// The site's data (src/constants/index.js) in the active language. English is the base;
// each other language only overrides the fields it translates.
const useContent = () => {
    const { lang } = useLang();
    return useMemo(() => {
        const o = overrides[lang];
        if (!o) {
            return {
                hud: base.hud,
                projects: base.projects,
                education: base.education,
                certificates: base.certificates,
                experience: base.experience,
                instruments: base.instruments,
            };
        }
        return {
            hud: o.hud ?? base.hud,
            projects: base.projects.map((p) => localizeProject(p, o.projects?.[p.id])),
            education: { ...base.education, ...o.education },
            certificates: base.certificates.map((c) => ({ ...c, ...o.certificates?.[c.id] })),
            experience: base.experience.map((e) => ({ ...e, ...o.experience?.[e.id] })),
            instruments: base.instruments.map((g) => ({ ...g, group: o.instrumentGroups?.[g.group] ?? g.group })),
        };
    }, [lang]);
};

export default useContent;
