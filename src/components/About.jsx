import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '24px', lineHeight: 1.6 }}>
                        Motivated and detail-oriented Information Technology student at <strong>Manipal Institute of Technology</strong> with hands-on experience in computer vision, web development, and community service.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Passionate about solving real-world problems through technical and volunteer initiatives. I thrive in environments that challenge my technical skills and allow me to contribute to meaningful projects.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
                >
                    <motion.div
                        whileHover={{ y: -5, borderColor: 'var(--secondary-color)' }}
                        style={{ padding: '32px', border: '1px solid var(--glass-border)', borderRadius: '16px', background: 'var(--glass-bg)', transition: 'all 0.3s' }}
                    >
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>3+</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Years of Experience</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5, borderColor: 'var(--secondary-color)' }}
                        style={{ padding: '32px', border: '1px solid var(--glass-border)', borderRadius: '16px', background: 'var(--glass-bg)', transition: 'all 0.3s' }}
                    >
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>5+</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Complex Projects</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5, borderColor: 'var(--secondary-color)' }}
                        style={{ padding: '32px', border: '1px solid var(--glass-border)', borderRadius: '16px', background: 'var(--glass-bg)', transition: 'all 0.3s' }}
                    >
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>2nd</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Hackathon Runner Up</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5, borderColor: 'var(--secondary-color)' }}
                        style={{ padding: '32px', border: '1px solid var(--glass-border)', borderRadius: '16px', background: 'var(--glass-bg)', transition: 'all 0.3s' }}
                    >
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>IT</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Degree Track</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
