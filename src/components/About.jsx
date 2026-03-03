import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Cpu, Users } from 'lucide-react';

const stats = [
    { value: '3+', label: 'Years Coding' },
    { value: '5+', label: 'Projects Built' },
    { value: '2nd', label: 'Hackathon RU' },
    { value: 'BTech', label: 'IT @ MIT' },
];

const highlights = [
    { icon: <MapPin size={16} />, text: 'Manipal Institute of Technology' },
    { icon: <GraduationCap size={16} />, text: 'BTech Information Technology' },
    { icon: <Cpu size={16} />, text: 'AI/ML • Computer Vision • Full-Stack' },
    { icon: <Users size={16} />, text: 'Community Volunteer & Leader' },
];

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '80px',
                    alignItems: 'center',
                }}>
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="section-label">About Me</p>
                        <h2 className="section-title">
                            Building the future<br />
                            <span className="gradient-text">one line at a time</span>
                        </h2>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
                            I'm a passionate{' '}
                            <span style={{ color: 'var(--text)', fontWeight: 600 }}>AI & Software Engineer</span>{' '}
                            studying Information Technology at Manipal Institute of Technology.
                            I thrive at the intersection of machine intelligence and scalable software systems.
                        </p>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '36px' }}>
                            From building drone surveillance systems with YOLOv8 to developing
                            multilingual AI speech platforms for enterprise — I turn complex
                            ideas into real, deployable products.
                        </p>

                        {/* Highlights */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {highlights.map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    <span style={{ color: 'var(--purple-light)' }}>{h.icon}</span>
                                    {h.text}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right – Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                style={{
                                    padding: '36px 28px',
                                    borderRadius: '20px',
                                }}
                            >
                                <div style={{
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-0.04em',
                                    marginBottom: '6px',
                                    background: 'var(--gradient-text)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>
                                    {stat.value}
                                </div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}

                        {/* Image placeholder with gradient */}
                        <motion.div
                            className="glass-card"
                            style={{
                                gridColumn: '1 / -1',
                                padding: '28px',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            <div style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '14px',
                                background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(59,130,246,0.3))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                border: '1px solid rgba(139,92,246,0.3)',
                            }}>
                                <Cpu size={24} color="var(--purple-light)" />
                            </div>
                            <div>
                                <p style={{ fontWeight: 700, marginBottom: '4px', fontSize: '0.95rem' }}>
                                    Currently interning at OCTACOMM Technologies
                                </p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                                    Building MINDX — an AI-driven multilingual speech platform
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
