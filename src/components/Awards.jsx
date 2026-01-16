import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, MapPin, Calendar } from 'lucide-react';

const Awards = () => {
    const awards = [
        {
            title: '2nd Runner-Up | National-Level Hackathon',
            event: 'Ingenium Hackathon',
            company: 'Quest Global Company',
            location: 'Bangalore',
            date: 'March 2025',
            points: [
                'Achieved 2nd Runner-Up position out of 2800+ participating teams from 30+ universities across India in a prestigious national hackathon organized by Quest Global.',
                'Designed and presented a Secure Drone System for Defense, showcasing real-world application of AI for national security.',
                'Collaborated with a multidisciplinary team to develop a fully operational prototype, demonstrating strong problem-solving and project execution skills under pressure.'
            ]
        }
    ];

    return (
        <section id="awards" className="container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="section-title"
            >
                Awards & Achievements
            </motion.h2>
            <div style={{ display: 'grid', gap: '40px' }}>
                {awards.map((award, i) => (
                    <motion.div
                        key={award.event}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        style={{
                            padding: '48px',
                            border: '1px solid var(--secondary-color)',
                            borderRadius: '32px',
                            background: 'rgba(99, 102, 241, 0.04)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
                        }}
                    >
                        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                            <div style={{
                                background: 'var(--secondary-color)',
                                color: '#fff',
                                padding: '20px',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 16px rgba(99, 102, 241, 0.3)'
                            }}>
                                <Trophy size={40} />
                            </div>

                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>{award.title}</h3>
                                <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px' }}>{award.event} | {award.company}</p>

                                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '32px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                        <MapPin size={16} /> {award.location}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                        <Calendar size={16} /> {award.date}
                                    </div>
                                </div>

                                <ul style={{ padding: 0, listStyle: 'none' }}>
                                    {award.points.map((point, idx) => (
                                        <li key={idx} style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '1.1rem',
                                            lineHeight: 1.7,
                                            marginBottom: '16px',
                                            position: 'relative',
                                            paddingLeft: '32px'
                                        }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-color)', fontSize: '1.4rem' }}>•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Awards;
