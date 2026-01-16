import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Secure drone system for defense',
            date: 'March 2025',
            category: 'Computer Vision / Robotics',
            description: 'Engineered an autonomous drone system for surveillance and threat detection in defense applications.',
            points: [
                'Designed and developed an autonomous drone system for surveillance and threat detection in defense applications.',
                'Integrated YOLOv8 for real-time object detection and facial recognition using live camera feed.',
                'Built a custom Ground Control Station (GCS) interface to monitor drone activity, view detected entities, and control mission parameters.',
                'Implemented secure communication and modular architecture for easy deployment in various terrains and mission types.',
                'Earned 2nd Runner-Up at the Quest Global Ingenium Hackathon for innovation, functionality, and defense-focused impact.'
            ],
            achievement: '2nd Runner-Up @ Quest Global Ingenium Hackathon',
            github: 'https://github.com/DhruvaKuntamukkala?tab=repositories'
        },
        {
            title: 'VYTAL APP – HEALTH AND NUTRITION TRACKER',
            date: 'July 2025',
            category: 'Mobile Development',
            description: 'Built a smart mobile app to track meals, calculate BMI, and manage health.',
            points: [
                'Built a smart mobile app to track meals, calculate BMI, and manage health.',
                'Dynamic BMI calculator based on user profile.',
                'Meal logging with nutrient autofill via API.',
                'Real-time food suggestions with editing/deletion.',
                'Customizable meal sections with drag-and-drop.',
                'Quick access to Reminders, Medicine Info & Calendar.'
            ],
            github: 'https://github.com/DhruvaKuntamukkala?tab=repositories'
        },
        {
            title: 'CROWD-MANAGEMENT SYSTEM',
            date: 'December 2024',
            category: 'Smart City / Safety',
            description: 'A cutting-edge solution for real-time crowd control.',
            points: [
                'The Crowd Management System is a cutting-edge solution for real-time crowd control.',
                'Designed to enhance safety and efficiency by monitoring and managing the movement of people in real-time.',
                'Leverages advanced technologies like real-time data tracking, alert mechanisms, and customizable controls.',
                'Ideal for large events, public spaces, and facilities requiring crowd oversight.'
            ],
            github: 'https://github.com/DhruvaKuntamukkala?tab=repositories'
        },
        {
            title: 'ACTIVE CHAT MONITORING SYSTEM',
            date: 'September 2024',
            category: 'Web Development / Security',
            description: 'Interactive platform for seamless messaging and professional communication management.',
            points: [
                'An interactive platform for seamless messaging and communication management.',
                'Facilitates real-time communication through chat windows and chat rooms.',
                'Provides administrators with tools to monitor and manage conversations for safety and compliance.',
                'Supports multiple chat rooms and user authentication.'
            ],
            github: 'https://github.com/DhruvaKuntamukkala?tab=repositories'
        }
    ];

    return (
        <section id="projects" className="container">
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Notable Projects</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '60px',
                                padding: '40px',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '24px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            whileHover={{ y: -5, borderColor: 'var(--secondary-color)', transition: { duration: 0.3 } }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '150px',
                                height: '150px',
                                background: 'radial-gradient(circle at top right, var(--secondary-color), transparent 70%)',
                                opacity: 0.05,
                                pointerEvents: 'none'
                            }} />

                            <div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 600 }}>{project.date}</p>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}>{project.title}</h3>
                                <p style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--secondary-color)',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    marginBottom: '32px'
                                }}>
                                    {project.category}
                                </p>

                                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                                            <Github size={18} /> View Code
                                        </a>
                                    )}
                                    {project.achievement && (
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '8px 16px',
                                            background: 'rgba(99, 102, 241, 0.1)',
                                            borderRadius: '8px',
                                            color: 'var(--secondary-color)',
                                            fontSize: '0.85rem',
                                            fontWeight: 700,
                                            border: '1px solid rgba(99, 102, 241, 0.2)'
                                        }}>
                                            <Trophy size={16} /> Award
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <ul style={{ padding: 0, listStyle: 'none' }}>
                                    {project.points.slice(0, 4).map((point, idx) => (
                                        <li key={idx} style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '1rem',
                                            lineHeight: 1.6,
                                            marginBottom: '12px',
                                            position: 'relative',
                                            paddingLeft: '24px'
                                        }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-color)', fontWeight: 800 }}>•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
