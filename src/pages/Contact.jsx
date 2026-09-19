import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import Footer from '../sections/Footer.jsx';
import { CV_PATH } from '../constants/index.js';

const EMAIL = 'osmansahinguler@gmail.com';

// EmailJS client-side credentials. These are public by design (they ship in the
// JS bundle either way) — the account is protected by EmailJS's own rate limits
// and allowed-origins settings, never by hiding these values. Env vars still
// take precedence so they can be overridden per-deployment.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || 'service_o029aq5';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || 'template_0yhwu5g';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || 'WwERb2CbFyThOom_p';

const contactRows = [
    { href: `mailto:${EMAIL}`, label: EMAIL, tag: 'Email' },
    { href: 'https://github.com/HawkOsm', label: 'github.com/HawkOsm', tag: 'GitHub', external: true },
    { href: 'https://www.linkedin.com/in/osman-sahin-guler/', label: 'in/osman-sahin-guler', tag: 'LinkedIn', external: true },
    { href: CV_PATH, label: 'Download my résumé', tag: 'CV', download: true },
];

const Contact = () => {
    const formRef = useRef();
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Osman Şahin Güler',
                    from_email: form.email,
                    to_email: EMAIL,
                    company: form.company,
                    message: form.message,
                },
                EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({ show: true, text: 'Message sent — I usually reply within a day.', type: 'success' });
                    setTimeout(() => {
                        hideAlert();
                        setForm({ name: '', email: '', company: '', message: '' });
                    }, 3000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    showAlert({ show: true, text: `Sending failed — email me directly at ${EMAIL}.`, type: 'danger' });
                }
            );
    };

    return (
        <>
            {alert.show && <Alert {...alert} />}

            <section className="container-site py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                <div>
                    <p className="eyebrow mb-6">Contact</p>
                    <h1
                        className="font-display font-bold leading-[0.96] tracking-[-0.035em] mb-6"
                        style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
                    >
                        Let&apos;s build<br />something.
                    </h1>
                    <p className="text-muted leading-[1.75] text-base mb-11 max-w-[44ch]">
                        Looking for an intern or junior engineer who ships real systems? I&apos;m open to
                        remote work and internships, anywhere in the world. I usually reply within a day.
                    </p>

                    <div className="flex flex-col border-t border-line">
                        {contactRows.map((row) => (
                            <a
                                key={row.tag}
                                href={row.href}
                                target={row.external ? '_blank' : undefined}
                                rel={row.external ? 'noopener noreferrer' : undefined}
                                download={row.download || undefined}
                                className="flex justify-between items-center gap-5 py-5 border-b border-line hover:text-accent transition-colors"
                            >
                                <span className="text-base">{row.label}</span>
                                <span className="text-[11px] tracking-[0.12em] uppercase text-faint">{row.tag}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="bg-panel border border-line rounded-[20px] p-6 sm:p-9 lg:sticky lg:top-24">
                    <h2 className="font-display font-semibold text-xl tracking-[-0.01em] mb-1.5">Send a message</h2>
                    <p className="text-muted text-sm mb-6.5">Tell me about the role or project.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                        <input
                            className="field-input"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                        />
                        <input
                            className="field-input"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            required
                        />
                        <input
                            className="field-input"
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Company / university (optional)"
                        />
                        <textarea
                            className="field-input"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={6}
                            placeholder="What are you working on?"
                            required
                        />
                        <button type="submit" disabled={loading} className="btn-primary justify-center mt-1">
                            {loading ? 'Sending…' : 'Send message →'}
                        </button>
                    </form>
                </div>
            </section>

            <Footer link={{ href: '/projects', label: 'See the projects →' }} />
        </>
    );
};

export default Contact;
