import { useEffect } from 'react';

// Full-size certificate viewer. Same behaviour as the project overlay:
// Esc or a click outside closes it, and page scroll is locked while it is open.
const CertificateOverlay = ({ cert, onClose }) => {
    useEffect(() => {
        if (!cert) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [cert, onClose]);

    if (!cert) return null;

    return (
        <div
            className="fixed inset-0 z-50 overflow-y-auto bg-ink/90 backdrop-blur-sm"
            onClick={onClose}
            role="presentation"
        >
            <div className="min-h-full flex items-center justify-center py-10 px-4 md:py-16">
                <div
                    className="relative w-full max-w-[980px] bg-panel border border-line rounded-3xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                    aria-label={cert.title}
                >
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 rounded-full bg-ink/70 border border-border flex items-center justify-center text-paper hover:border-accent hover:text-accent transition-colors"
                    >
                        ✕
                    </button>

                    <div className="p-6 md:p-10 pt-14 md:pt-16">
                        {cert.date && <span className="text-xs tracking-[0.12em] uppercase text-faint">{cert.date}</span>}
                        <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.1] mt-2 text-[clamp(1.3rem,2.6vw,2rem)]">
                            {cert.title}
                        </h2>
                        <p className="text-muted text-[15px] mt-2 mb-6">{cert.org}</p>
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full max-h-[70vh] object-contain bg-ink rounded-xl border border-line"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateOverlay;
