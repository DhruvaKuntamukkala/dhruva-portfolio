import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'Sarada Dental Care, Challapalli',
            role: 'Freelance Web Developer',
            location: 'Remote',
            period: 'September 2024 — October 2024',
            points: [
                'Designed and developed a professional website for a dental clinic, focusing on accessibility and local SEO.',
                'Implemented modern UI components to showcase services, staff, and patient testimonials.',
                'Optimized website performance and ensured responsive design across all mobile and desktop devices.',
                'Managed end-to-end deployment and provided technical support for domain and hosting setup.'
            ]
        },
        {
            company: 'Gemini consulting and services',
            role: 'Flutter Developer (Intern)',
            location: 'Hyderabad',
            period: 'June 2025 — July 2025',
            points: [
                'Developed cross-platform mobile apps using Flutter and Dart, focusing on UI responsiveness, seamless navigation, and user-centric design.',
                'Collaborated with senior developers to integrate RESTful APIs and third-party libraries for real-time data handling.',
                'Worked extensively with Android Studio, managing app builds, emulators, and debugging tools to ensure smooth deployment.',
                'Contributed to a healthcare and nutrition tracking app (Vytal), gaining hands-on experience in BMI calculation, nutrient tracking, and food suggestion features.',
                'Participated in weekly Agile stand-ups and sprint planning, learning software development lifecycle (SDLC) best practices.',
                'Enhanced app accessibility and UI/UX for both light and dark modes, improving overall user satisfaction and retention.'
            ]
        }
    ];

    return (
        <section id="experience" className="container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="section-title"
            >
                Professional Experience
            </motion.h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                {experiences.map((exp, i) => (
                    <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        style={{ marginBottom: '40px' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'baseline', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{exp.company}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{exp.period}</p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'baseline' }}>
                            <p style={{ color: 'var(--secondary-color)', fontWeight: 700, fontSize: '1.1rem' }}>{exp.role}</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{exp.location}</p>
                        </div>

                        <ul style={{ padding: 0, listStyle: 'none' }}>
                            {exp.points.map((point, idx) => (
                                <li key={idx} style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6,
                                    marginBottom: '16px',
                                    position: 'relative',
                                    paddingLeft: '28px'
                                }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-color)', fontWeight: 800 }}>—</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
