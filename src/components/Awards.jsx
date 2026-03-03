import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, MapPin, Calendar, Users, Star } from 'lucide-react';

const awards = [
    {
        title: '2nd Runner-Up',
        subtitle: 'National-Level Hackathon',
        event: 'Ingenium Hackathon',
        company: 'Quest Global',
        location: 'Bangalore',
        date: 'March 2025',
        points: [
            'Achieved 2nd Runner-Up out of 2800+ teams from 30+ universities across India.',
            'Designed and presented a Secure Drone System for Defense using AI-powered surveillance.',
            'Developed a fully operational prototype with YOLOv8 object detection and a custom GCS interface.',
            'Demonstrated strong problem-solving and project execution under pressure in a national setting.',
        ],
    },
];

const Awards = () => {
    return (
        <section id="awards">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '56px' }}
                >
                    <p className="section-label">Recognition</p>
                    <h2 className="section-title">
                        Awards & <span className="gradient-text">Achievements</span>
                    </h2>
                </motion.div>

                {awards.map((award, i) => (
                    <motion.div
                        key={award.event}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: 'relative',
                            borderRadius: '28px',
                            padding: '1px',
                            background: 'linear-gradient(135deg, rgba(251,191,36,0.4), rgba(139,92,246,0.3), rgba(59,130,246,0.2))',
                        }}
                    >
                        <div style={{
                            background: 'rgba(8,8,16,0.96)',
                            borderRadius: '27px',
                            padding: 'clamp(28px,5vw,56px)',
                            backdropFilter: 'blur(20px)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            {/* Glow */}
                            <div style={{
                                position: 'absolute',
                                top: '-60px',
                                left: '-60px',
                                width: '240px',
                                height: '240px',
                                background: 'radial-gradient(circle, rgba(251,191,36,0.08), transparent 70%)',
                                pointerEvents: 'none',
                            }} />

                            <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                                {/* Trophy Icon */}
                                <motion.div
                                    animate={{ rotate: [0, -5, 5, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                                    style={{
                                        width: '72px',
                                        height: '72px',
                                        borderRadius: '20px',
                                        background: 'linear-gradient(135deg, rgba(251,191,36,0.2), rgba(251,146,60,0.15))',
                                        border: '1px solid rgba(251,191,36,0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        boxShadow: '0 8px 24px rgba(251,191,36,0.15)',
                                    }}
                                >
                                    <Trophy size={34} color="#fbbf24" />
                                </motion.div>

                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                                        <h3 style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 900, letterSpacing: '-0.04em' }}>
                                            {award.title}
                                        </h3>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            padding: '4px 12px',
                                            background: 'rgba(251,191,36,0.1)',
                                            border: '1px solid rgba(251,191,36,0.2)',
                                            borderRadius: '100px',
                                            fontSize: '0.78rem',
                                            fontWeight: 700,
                                            color: '#fbbf24',
                                        }}>
                                            <Star size={12} fill="#fbbf24" />
                                            {award.subtitle}
                                        </span>
                                    </div>

                                    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '20px' }}>
                                        {award.event} · {award.company}
                                    </p>

                                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '32px' }}>
                                        {[
                                            { icon: <MapPin size={14} />, text: award.location },
                                            { icon: <Calendar size={14} />, text: award.date },
                                            { icon: <Users size={14} />, text: '2800+ Teams · 30+ Universities' },
                                        ].map((meta, mi) => (
                                            <div key={mi} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.85rem',
                                                fontWeight: 500,
                                            }}>
                                                <span style={{ color: '#fbbf24' }}>{meta.icon}</span>
                                                {meta.text}
                                            </div>
                                        ))}
                                    </div>

                                    <motion.ul
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ staggerChildren: 0.12 }}
                                        style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}
                                    >
                                        {award.points.map((pt, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -16 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '12px',
                                                    color: 'var(--text-secondary)',
                                                    fontSize: '0.97rem',
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                <span style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    background: '#fbbf24',
                                                    flexShrink: 0,
                                                    marginTop: '8px',
                                                    boxShadow: '0 0 8px rgba(251,191,36,0.5)',
                                                }} />
                                                {pt}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Awards;
