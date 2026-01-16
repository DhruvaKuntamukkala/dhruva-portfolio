import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Instagram } from 'lucide-react';

const Footer = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const response = await fetch("https://formspree.io/f/xreebdww", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus("SUCCESS");
            setFormState({ name: '', email: '', message: '' });
            alert('Message sent successfully! I will get back to you soon.');
        } else {
            setStatus("ERROR");
            alert('Oops! There was a problem sending your message.');
        }
    };

    return (
        <footer id="contact" style={{ padding: '100px 0 60px 0', borderTop: '1px solid var(--glass-border)', position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.03em' }}>
                            Let's Connect
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.6 }}>
                            Interested in collaborating or just want to say hi? Feel free to reach out through the form or any of my social channels below.
                        </p>

                        <div style={{ display: 'flex', gap: '24px', marginBottom: '48px' }}>
                            {[
                                { icon: Mail, url: 'mailto:dhruvakuntamukkala@gmail.com', label: 'Email' },
                                { icon: Linkedin, url: 'https://www.linkedin.com/in/dhruva-kuntamukkala/', label: 'LinkedIn' },
                                { icon: Github, url: 'https://github.com/DhruvaKuntamukkala?tab=repositories', label: 'GitHub' },
                                { icon: Instagram, url: 'https://www.instagram.com/dhruva.1235/?hl=en', label: 'Instagram' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target={social.url.startsWith('mailto') ? '_self' : '_blank'}
                                    rel="noreferrer"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: 'var(--glass-bg)',
                                        border: '1px solid var(--glass-border)'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.color = 'var(--secondary-color)';
                                        e.currentTarget.style.borderColor = 'var(--secondary-color)';
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                    aria-label={social.label}
                                >
                                    <social.icon size={22} />
                                </a>
                            ))}
                        </div>

                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.7 }}>
                            <p>© 2026 Dhruva Kuntamukkala • Built with React & Passion</p>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '40px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '100px',
                            height: '100px',
                            background: 'var(--secondary-color)',
                            filter: 'blur(80px)',
                            opacity: 0.2
                        }} />

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Send a Message</h3>
                            <a
                                href="https://www.instagram.com/dhruva.1235/?hl=en"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '0.8rem',
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    padding: '6px 12px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '100px',
                                    border: '1px solid var(--glass-border)',
                                    transition: 'all 0.3s'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor = '#E1306C';
                                    e.currentTarget.style.color = '#E1306C';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                }}
                            >
                                <Instagram size={14} /> @dhruva.1235
                            </a>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    placeholder="Enter your name"
                                    required
                                    style={{
                                        padding: '14px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--glass-border)',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: 'var(--text-primary)',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--secondary-color)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    placeholder="you@example.com"
                                    required
                                    style={{
                                        padding: '14px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--glass-border)',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: 'var(--text-primary)',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--secondary-color)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    placeholder="How can I help you?"
                                    required
                                    style={{
                                        padding: '14px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--glass-border)',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: 'var(--text-primary)',
                                        resize: 'none',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--secondary-color)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                ></textarea>
                            </div>
                            <button className="btn btn-primary" style={{ padding: '16px', borderRadius: '12px', justifyContent: 'center', fontSize: '1rem', gap: '10px' }}>
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
