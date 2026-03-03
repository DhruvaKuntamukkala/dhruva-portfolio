import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
    {
        company: 'Gemini Consulting and Services',
        role: 'Flutter Developer Intern',
        location: 'Hyderabad',
        period: 'June 2025 — July 2025',
        color: '#3b82f6',
        points: [
            'Developed cross-platform mobile apps using Flutter and Dart, focusing on UI responsiveness, seamless navigation, and user-centric design.',
            'Collaborated with senior developers to integrate RESTful APIs and third-party libraries for real-time data handling.',
            'Worked extensively with Android Studio, managing app builds, emulators, and debugging tools to ensure smooth deployment.',
            'Contributed to a healthcare and nutrition tracking app (Vytal) — BMI calculation, nutrient tracking, and food suggestion features.',
            'Participated in weekly Agile stand-ups and sprint planning, learning SDLC best practices.',
        ],
    },
    {
        company: 'Sarada Dental Care, Challapalli',
        role: 'Freelance Web Developer',
        location: 'Remote',
        period: 'September 2024 — October 2024',
        color: '#8b5cf6',
        points: [
            'Designed and developed a professional website for a dental clinic, focusing on accessibility and local SEO.',
            'Implemented modern UI components to showcase services, staff, and patient testimonials.',
            'Optimized website performance and ensured responsive design across all mobile and desktop devices.',
            'Managed end-to-end deployment and provided technical support for domain and hosting setup.',
        ],
    },
];

const bulletVar = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '56px' }}
                >
                    <p className="section-label">Work History</p>
                    <h2 className="section-title">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div style={{ position: 'relative', paddingLeft: '48px' }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: '6px',
                        bottom: '0',
                        width: '1px',
                        background: 'linear-gradient(to bottom, var(--purple), var(--blue), transparent)',
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                style={{ position: 'relative' }}
                            >
                                {/* Timeline dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-36px',
                                    top: '6px',
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '50%',
                                    background: exp.color,
                                    border: '3px solid var(--bg)',
                                    boxShadow: `0 0 12px ${exp.color}80`,
                                }} />

                                <div className="glass-card" style={{ padding: 'clamp(24px,4vw,44px)', borderRadius: '20px' }}>
                                    {/* Header */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap',
                                        gap: '12px',
                                        marginBottom: '8px',
                                    }}>
                                        <h3 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
                                            {exp.company}
                                        </h3>
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '5px 12px',
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '100px',
                                            fontSize: '0.78rem',
                                            fontWeight: 600,
                                            color: 'var(--text-secondary)',
                                        }}>
                                            <Calendar size={12} /> {exp.period}
                                        </div>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        marginBottom: '28px',
                                        flexWrap: 'wrap',
                                    }}>
                                        <span style={{ color: exp.color, fontWeight: 700, fontSize: '0.95rem' }}>
                                            {exp.role}
                                        </span>
                                        <span style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.82rem',
                                        }}>
                                            <MapPin size={12} /> {exp.location}
                                        </span>
                                    </div>

                                    {/* Bullets */}
                                    <motion.ul
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ staggerChildren: 0.1 }}
                                        style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}
                                    >
                                        {exp.points.map((point, idx) => (
                                            <motion.li
                                                key={idx}
                                                variants={bulletVar}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '12px',
                                                    color: 'var(--text-secondary)',
                                                    fontSize: '0.95rem',
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                <ChevronRight size={16} color={exp.color} style={{ flexShrink: 0, marginTop: '4px' }} />
                                                {point}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
