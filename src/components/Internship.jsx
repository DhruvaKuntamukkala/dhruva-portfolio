import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, ChevronRight, Zap } from 'lucide-react';

const bullets = [
    'Working on development of an AI-driven multilingual speech translation platform (MINDX) for enterprise applications.',
    'Collaborating on real-time AI systems integrating speech recognition, translation, and conversational intelligence.',
    'Implementing scalable backend components using Python, FastAPI, and AI/ML frameworks.',
    'Conducting performance benchmarking and optimizing model inference for production environments.',
    'Contributing to design discussions on AI-based communication automation solutions.',
];

const containerVars = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const bulletVar = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Internship = () => {
    return (
        <section id="internship">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '56px' }}
                >
                    <p className="section-label">Current Role</p>
                    <h2 className="section-title">
                        Internship <span className="gradient-text">Experience</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'relative' }}
                >
                    {/* Glow card */}
                    <div style={{
                        position: 'relative',
                        borderRadius: '28px',
                        padding: '1px',
                        background: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(59,130,246,0.2), rgba(6,182,212,0.1))',
                    }}>
                        <div style={{
                            background: 'rgba(8,8,16,0.95)',
                            borderRadius: '27px',
                            padding: 'clamp(28px,5vw,56px)',
                            backdropFilter: 'blur(20px)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            {/* BG glow */}
                            <div style={{
                                position: 'absolute',
                                top: '-80px',
                                right: '-80px',
                                width: '300px',
                                height: '300px',
                                background: 'radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)',
                                pointerEvents: 'none',
                            }} />

                            {/* Header */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                flexWrap: 'wrap',
                                gap: '20px',
                                marginBottom: '36px',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                                    {/* Company Icon */}
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '18px',
                                        background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.15))',
                                        border: '1px solid rgba(139,92,246,0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <Building2 size={28} color="var(--purple-light)" />
                                    </div>

                                    <div>
                                        <h3 style={{ fontSize: 'clamp(1.2rem,3vw,1.7rem)', fontWeight: 800, marginBottom: '4px', letterSpacing: '-0.03em' }}>
                                            OCTACOMM Technologies Pvt. Ltd.
                                        </h3>
                                        <p style={{
                                            color: 'var(--purple-light)',
                                            fontWeight: 600,
                                            fontSize: '1rem',
                                            marginBottom: '6px',
                                        }}>
                                            AI/ML Software Engineer Intern
                                        </p>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                            Hyderabad, India
                                        </p>
                                    </div>
                                </div>

                                {/* Period badge */}
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '8px 16px',
                                    background: 'rgba(139,92,246,0.1)',
                                    border: '1px solid rgba(139,92,246,0.2)',
                                    borderRadius: '100px',
                                    fontSize: '0.82rem',
                                    fontWeight: 600,
                                    color: 'var(--purple-light)',
                                }}>
                                    <Calendar size={13} />
                                    Jan 2026 – May 2026
                                </div>
                            </div>

                            {/* Project Badge */}
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 18px',
                                background: 'rgba(6,182,212,0.08)',
                                border: '1px solid rgba(6,182,212,0.2)',
                                borderRadius: '100px',
                                fontSize: '0.82rem',
                                fontWeight: 700,
                                color: '#67e8f9',
                                marginBottom: '36px',
                            }}>
                                <Zap size={14} />
                                Project: MINDX – Multilingual AI Speech Platform
                            </div>

                            {/* Bullets */}
                            <motion.ul
                                variants={containerVars}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}
                            >
                                {bullets.map((b, i) => (
                                    <motion.li
                                        key={i}
                                        variants={bulletVar}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '14px',
                                            color: 'var(--text-secondary)',
                                            fontSize: '1rem',
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        <ChevronRight
                                            size={18}
                                            color="var(--purple)"
                                            style={{ flexShrink: 0, marginTop: '3px' }}
                                        />
                                        {b}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Internship;
