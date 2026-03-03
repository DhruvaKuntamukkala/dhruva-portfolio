import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
    {
        school: 'Manipal Institute of Technology',
        location: 'Manipal',
        degree: 'Bachelor of Technology (BTech)',
        field: 'Information Technology',
        period: 'Aug 2022 — May 2026',
        color: '#8b5cf6',
        highlight: true,
    },
    {
        school: 'Happy Valley International School',
        location: 'Agiripalli',
        degree: 'Schooling & Intermediate',
        field: 'Science (MPC)',
        period: 'Jun 2017 — May 2022',
        color: '#3b82f6',
        highlight: false,
    },
];

const Education = () => {
    return (
        <section id="education">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '56px' }}
                >
                    <p className="section-label">Academic Background</p>
                    <h2 className="section-title">
                        Education <span className="gradient-text">Journey</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.school}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -6 }}
                            style={{
                                position: 'relative',
                                borderRadius: '22px',
                                padding: '1px',
                                background: edu.highlight
                                    ? `linear-gradient(135deg, ${edu.color}50, rgba(59,130,246,0.3))`
                                    : 'rgba(255,255,255,0.06)',
                            }}
                        >
                            <div style={{
                                background: 'rgba(8,8,16,0.95)',
                                borderRadius: '21px',
                                padding: '40px 36px',
                                height: '100%',
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                {/* BG glow */}
                                {edu.highlight && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-60px',
                                        right: '-60px',
                                        width: '200px',
                                        height: '200px',
                                        background: `radial-gradient(circle, ${edu.color}15, transparent 70%)`,
                                        pointerEvents: 'none',
                                    }} />
                                )}

                                {/* Icon */}
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '16px',
                                    background: `${edu.color}18`,
                                    border: `1px solid ${edu.color}35`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '24px',
                                }}>
                                    <GraduationCap size={24} color={edu.color} />
                                </div>

                                {/* Period */}
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '4px 12px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '100px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--text-secondary)',
                                    marginBottom: '20px',
                                }}>
                                    <Calendar size={11} /> {edu.period}
                                </div>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.03em' }}>
                                    {edu.school}
                                </h3>

                                <p style={{ fontWeight: 700, color: edu.color, fontSize: '0.95rem', marginBottom: '4px' }}>
                                    {edu.degree}
                                </p>

                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
                                    {edu.field}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.82rem',
                                }}>
                                    <MapPin size={13} /> {edu.location}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
