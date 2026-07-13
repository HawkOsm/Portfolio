import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import Reveal from '../components/Reveal.jsx';
import { socials, CV_PATH } from '../constants/index.js';

const EMAIL = 'osmansahinguler@gmail.com';

// EmailJS client-side credentials. These are public by design (they ship in the
// JS bundle either way) — the account is protected by EmailJS's own rate limits
// and allowed-origins settings, never by hiding these values. Env vars still
// take precedence so they can be overridden per-deployment.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || 'service_o029aq5';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || 'template_0yhwu5g';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || 'WwERb2CbFyThOom_p';

const Contact = () => {
    const formRef = useRef();
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [hasCopied, setHasCopied] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(EMAIL).then(() => {
            setHasCopied(true);
            setTimeout(() => setHasCopied(false), 2000);
        });
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
                        setForm({ name: '', email: '', message: '' });
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
        <section id="contact" className="container-site pt-24 pb-24">
            {alert.show && <Alert {...alert} />}

            <Reveal>
                <p className="eyebrow mb-3">Contact</p>
                <h2 className="section-head mb-10">Let&apos;s talk</h2>
            </Reveal>

            <div className="hairline-t grid lg:grid-cols-2 gap-12 pt-10">
                <Reveal>
                    <p className="text-muted leading-relaxed max-w-md">
                        Looking for an intern or junior engineer who ships real systems?
                        I&apos;m open to remote work and internships, anywhere in the world.
                        Write here, or reach me directly:
                    </p>

                    <button
                        onClick={handleCopy}
                        className="mt-8 font-mono text-lg sm:text-xl text-paper hover:text-buff transition-colors flex items-center gap-3"
                    >
                        {EMAIL}
                        <span className="font-mono text-xs uppercase tracking-widest text-muted">
                            {hasCopied ? 'copied ✓' : '[ copy ]'}
                        </span>
                    </button>

                    <div className="mt-10 flex flex-wrap gap-6">
                        {socials.map(({ name, href }) => (
                            <a
                                key={name}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className="font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-signal transition-colors"
                            >
                                {name} ↗
                            </a>
                        ))}
                        <a
                            href={CV_PATH}
                            download
                            className="font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-signal transition-colors"
                        >
                            CV — PDF ↓
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <label className="space-y-2">
                            <span className="field-label">Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Your name"
                            />
                        </label>

                        <label className="space-y-2">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="you@company.com"
                            />
                        </label>

                        <label className="space-y-2">
                            <span className="field-label">Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Tell me about the role or project…"
                            />
                        </label>

                        <button className="btn-primary self-start" type="submit" disabled={loading}>
                            {loading ? 'Sending…' : 'Send message →'}
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
