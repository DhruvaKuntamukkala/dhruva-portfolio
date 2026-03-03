import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, CheckCircle2 } from 'lucide-react';

const certifications = [
    {
        title: 'AI Engineer Course 2026',
        subtitle: 'Complete AI Engineer Bootcamp',
        issuer: 'Udemy',
        color: '#8b5cf6',
        gradientFrom: 'rgba(139,92,246,0.15)',
        gradientTo: 'rgba(59,130,246,0.08)',
        points: [
            'Comprehensive training in Python, NLP, Transformers, and LLMs.',
            'Hands-on with Hugging Face, LangChain, and AI system development.',
            'Real-world generative AI pipeline implementation.',
            'End-to-end AI application deployment strategies.',
        ],
        certUrl: 'https://ude.my/UC-dba3dd59-29ce-42f8-bea5-85917ecc2d32',
        badge: 'AI / ML',
    },
    {
        title: 'The Complete Full-Stack Web Development Bootcamp',
        subtitle: 'Full-Stack Web Development',
        issuer: 'Udemy',
        color: '#3b82f6',
        gradientFrom: 'rgba(59,130,246,0.15)',
        gradientTo: 'rgba(6,182,212,0.08)',
        points: [
            'Mastered HTML, CSS, JavaScript, React, and Node.js.',
            'Built applications with PostgreSQL and REST API development.',
            'End-to-end full-stack applications following industry best practices.',
            'Authentication, security, and deployment on cloud platforms.',
        ],
        certUrl: 'https://ude.my/UC-a4f7d827-be80-47e5-8caf-b06497ba3ba8',
        badge: 'Full-Stack',
    },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVar = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Certifications = () => {
    return (
        <section id="certifications">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '56px' }}
                >
                    <p className="section-label">Learning</p>
                    <h2 className="section-title">
                        Certifications & <span className="gradient-text">Courses</span>
                    </h2>
                    <p className="section-subtitle">
                        Continuous learning is core to my growth as an engineer.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '28px',
                    }}
                >
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.title}
                            variants={cardVar}
                            className="cert-card"
                            whileHover={{ y: -8, scale: 1.02 }}
                            style={{ height: '100%' }}
                        >
                            {/* Glow border wrapper */}
                            <div style={{
                                background: `linear-gradient(135deg, ${cert.color}35, ${cert.color}10, rgba(255,255,255,0.05))`,
                                borderRadius: '20px',
                                padding: '1.5px',
                                height: '100%',
                            }}>
                                <div style={{
                                    background: 'rgba(8,8,16,0.96)',
                                    borderRadius: '19px',
                                    padding: '36px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    backdropFilter: 'blur(20px)',
                                }}>
                                    {/* BG glow */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-40px',
                                        right: '-40px',
                                        width: '180px',
                                        height: '180px',
                                        background: `radial-gradient(circle, ${cert.gradientFrom}, transparent 70%)`,
                                        pointerEvents: 'none',
                                    }} />

                                    {/* Header */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '14px',
                                            background: `${cert.color}18`,
                                            border: `1px solid ${cert.color}35`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <Award size={22} color={cert.color} />
                                        </div>
                                        <span style={{
                                            padding: '4px 12px',
                                            background: `${cert.color}12`,
                                            border: `1px solid ${cert.color}25`,
                                            borderRadius: '100px',
                                            fontSize: '0.72rem',
                                            fontWeight: 700,
                                            color: cert.color,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                        }}>
                                            {cert.badge}
                                        </span>
                                    </div>

                                    <p style={{ fontSize: '0.78rem', fontWeight: 600, color: cert.color, marginBottom: '8px', letterSpacing: '0.04em' }}>
                                        {cert.issuer}
                                    </p>

                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '6px', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
                                        {cert.title}
                                    </h3>

                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '24px', fontWeight: 500 }}>
                                        {cert.subtitle}
                                    </p>

                                    {/* Points */}
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, marginBottom: '28px' }}>
                                        {cert.points.map((pt, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.07, duration: 0.4 }}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px',
                                                    color: 'var(--text-secondary)',
                                                    fontSize: '0.85rem',
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                <CheckCircle2 size={14} color={cert.color} style={{ flexShrink: 0, marginTop: '3px' }} />
                                                {pt}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* View Certificate Button */}
                                    <a
                                        href={cert.certUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn"
                                        style={{
                                            background: `${cert.color}15`,
                                            border: `1px solid ${cert.color}35`,
                                            color: cert.color,
                                            borderRadius: '12px',
                                            padding: '12px 20px',
                                            fontSize: '0.85rem',
                                            justifyContent: 'center',
                                            fontWeight: 700,
                                            transition: 'all 0.3s',
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.background = cert.color;
                                            e.currentTarget.style.color = '#fff';
                                            e.currentTarget.style.boxShadow = `0 8px 24px ${cert.color}40`;
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.background = `${cert.color}15`;
                                            e.currentTarget.style.color = cert.color;
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <ExternalLink size={15} /> View Certificate
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
