import { techIcons } from '../constants/index.js';

// Renders a tech name with its logo when one exists in the shared techIcons
// dict, otherwise falls back to plain text — used anywhere a stack/logos list
// is displayed (Home's project rows, Projects cards, and the project overlay).
const TechBadge = ({ name, className = '' }) => {
    const tech = techIcons[name];

    return (
        <span className={`inline-flex items-center gap-1.5 ${className}`}>
            {tech && (
                <span
                    className="tech-icon"
                    style={{
                        WebkitMaskImage: `url(/assets/icons/${tech.slug}.svg)`,
                        maskImage: `url(/assets/icons/${tech.slug}.svg)`,
                        backgroundColor: tech.color,
                    }}
                    aria-hidden="true"
                />
            )}
            {name}
        </span>
    );
};

export default TechBadge;
