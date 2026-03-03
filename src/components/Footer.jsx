import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram, Send, CheckCircle } from 'lucide-react';

const socials = [
    { icon: Mail, url: 'mailto:dhruvakuntamukkala@gmail.com', label: 'Email', color: '#8b5cf6' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/dhruva-kuntamukkala/', label: 'LinkedIn', color: '#0a66c2' },
    { icon: Github, url: 'https://github.com/DhruvaKuntamukkala?tab=repositories', label: 'GitHub', color: '#e0e0e0' },
    { icon: Instagram, url: 'https://www.instagram.com/dhruva.1235/?hl=en', label: 'Instagram', color: '#e1306c' },
];

const Footer = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        const form = e.target;
        const data = new FormData(form);

        const response = await fetch('https://formspree.io/f/xreebdww', {
            method: 'POST',
            body: data,
            headers: { Accept: 'application/json' },
        });

        if (response.ok) {
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
        } else {
            setStatus('error');
        }
        setTimeout(() => setStatus('idle'), 4000);
    };

    return (
        <footer id="contact" style={{
            padding: 'clamp(80px,10vw,140px) 0 60px',
            borderTop: '1px solid var(--border)',
            position: 'relative',
        }}>
            {/* Top glow */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--purple), var(--blue), transparent)',
            }} />

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '64px',
                }}>
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="section-label" style={{ marginBottom: '16px' }}>Get in Touch</p>
                        <h2 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '20px', lineHeight: 1.1 }}>
                            Let's build something<br />
                            <span className="gradient-text">incredible together</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '40px', maxWidth: '380px' }}>
                            Whether it's a project, internship, or just a conversation about AI — my inbox is always open.
                        </p>

                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
                            {socials.map(({ icon: Icon, url, label, color }) => (
                                <motion.a
                                    key={label}
                                    href={url}
                                    target={url.startsWith('mailto') ? '_self' : '_blank'}
                                    rel="noreferrer"
                                    aria-label={label}
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        color: 'var(--text-secondary)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s, border-color 0.2s, box-shadow 0.2s',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.color = color;
                                        e.currentTarget.style.borderColor = color + '60';
                                        e.currentTarget.style.boxShadow = `0 4px 16px ${color}30`;
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                        e.currentTarget.style.borderColor = 'var(--border)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>

                        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.82rem' }}>
                            © 2026 Dhruva Kuntamukkala · Built with React & Framer Motion
                        </p>
                    </motion.div>

                    {/* Right – Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        style={{
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: '24px',
                            padding: 'clamp(24px,4vw,44px)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* BG glow */}
                        <div style={{
                            position: 'absolute',
                            top: '-60px',
                            right: '-60px',
                            width: '200px',
                            height: '200px',
                            background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)',
                            pointerEvents: 'none',
                        }} />

                        <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '28px', letterSpacing: '-0.02em' }}>
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    placeholder="How can I help you?"
                                    required
                                    style={{ resize: 'none' }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-primary"
                                style={{
                                    justifyContent: 'center',
                                    padding: '16px',
                                    borderRadius: '14px',
                                    fontSize: '0.95rem',
                                    opacity: status === 'loading' ? 0.7 : 1,
                                }}
                                disabled={status === 'loading'}
                            >
                                {status === 'success' ? (
                                    <><CheckCircle size={18} /> Sent Successfully!</>
                                ) : status === 'loading' ? (
                                    'Sending...'
                                ) : (
                                    <><Send size={18} /> Send Message</>
                                )}
                            </motion.button>

                            {status === 'error' && (
                                <p style={{ color: '#f87171', fontSize: '0.85rem', textAlign: 'center' }}>
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
