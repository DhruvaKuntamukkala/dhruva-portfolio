import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, FileText, Download, ArrowDown } from 'lucide-react';

const Hero = () => {

    const containerVars = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.3 }
        }
    };

    const itemVars = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const socials = [
        { icon: Github, url: 'https://github.com/DhruvaKuntamukkala?tab=repositories', label: 'GitHub' },
        { icon: Linkedin, url: 'https://www.linkedin.com/in/dhruva-kuntamukkala/', label: 'LinkedIn' },
        { icon: Instagram, url: 'https://www.instagram.com/dhruva.1235/?hl=en', label: 'Instagram' },
    ];

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '80px',
            }}
        >
            {/* Animated Blob Background */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
                <motion.div
                    animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute',
                        top: '-10%',
                        left: '-10%',
                        width: '600px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, -15, 0], y: [0, 25, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    style={{
                        position: 'absolute',
                        top: '30%',
                        right: '-10%',
                        width: '500px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], x: [0, 10, 0], y: [0, 15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '10%',
                        left: '30%',
                        width: '400px',
                        height: '300px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                {/* Grid lines */}
                <svg width="100%" height="100%" style={{ opacity: 0.04, position: 'absolute', top: 0 }}>
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    animate="visible"
                    style={{ maxWidth: '800px' }}
                >
                    {/* Badge */}
                    <motion.div variants={itemVars} style={{ marginBottom: '32px' }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 16px 6px 8px',
                            background: 'rgba(139,92,246,0.08)',
                            border: '1px solid rgba(139,92,246,0.2)',
                            borderRadius: '100px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            color: 'var(--purple-light)',
                        }}>
                            <span className="glow-dot" />
                            Open to opportunities · Based in India
                        </span>
                    </motion.div>

                    {/* Avatar */}
                    <motion.div variants={itemVars} style={{ marginBottom: '32px' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            border: '2px solid rgba(139,92,246,0.4)',
                            overflow: 'hidden',
                            boxShadow: '0 0 40px rgba(139,92,246,0.2)',
                            background: 'var(--surface)',
                        }}>
                            <img
                                src="/profile.jpg"
                                alt="Dhruva Kuntamukkala"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={itemVars}
                        style={{
                            fontSize: 'clamp(3.2rem, 9vw, 7rem)',
                            fontWeight: 900,
                            lineHeight: 0.95,
                            letterSpacing: '-0.04em',
                            marginBottom: '28px',
                        }}
                    >
                        Dhruva<br />
                        <span className="gradient-text">Kuntamukkala</span>
                    </motion.h1>

                    {/* Static designation */}
                    <motion.div
                        variants={itemVars}
                        style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: '24px',
                            fontWeight: 500,
                            letterSpacing: '0.01em',
                        }}
                    >
                        Software Developer
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVars}
                        style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '560px',
                            marginBottom: '48px',
                            lineHeight: 1.75,
                        }}
                    >
                        Crafting intelligent systems at the intersection of{' '}
                        <span style={{ color: 'var(--purple-light)', fontWeight: 600 }}>AI/ML</span> and{' '}
                        <span style={{ color: 'var(--purple-light)', fontWeight: 600 }}>full-stack engineering</span>.
                        Currently interning at OCTACOMM Technologies building multilingual AI platforms.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVars}
                        style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '52px' }}
                    >
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                        >
                            <FileText size={18} /> View Resume
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="btn btn-outline"
                        >
                            <Download size={18} /> Download CV
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVars} style={{ display: 'flex', gap: '12px' }}>
                        {socials.map(({ icon: Icon, url, label }) => (
                            <motion.a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                whileHover={{ y: -3, scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text-secondary)',
                                    transition: 'color 0.2s, border-color 0.2s, box-shadow 0.2s',
                                    textDecoration: 'none',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.color = 'var(--purple-light)';
                                    e.currentTarget.style.borderColor = 'var(--purple)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(139,92,246,0.2)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.borderColor = 'var(--border)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown size={16} color="var(--text-tertiary)" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
