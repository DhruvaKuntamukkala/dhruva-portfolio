import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            school: 'Manipal Institute of Technology, Manipal',
            degree: 'Bachelor of Technology- BTech',
            period: '08/2022 - 05/2026',
            location: 'Manipal'
        },
        {
            school: 'Happy Valley International School, Agiripalli',
            degree: 'Schooling and Intermediate',
            period: '06/2017 - 05/2022',
            location: 'Agiripalli'
        }
    ];

    return (
        <section id="education" className="container">
            <motion.h2
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                Education
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                {education.map((item, i) => (
                    <motion.div
                        key={item.school}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        style={{
                            padding: '48px',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '24px',
                            background: 'var(--glass-bg)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                        }}
                    >
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 700, marginBottom: '16px', letterSpacing: '0.05em' }}>{item.period}</p>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>{item.school}</h3>
                        <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '8px' }}>{item.degree}</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>{item.location}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
