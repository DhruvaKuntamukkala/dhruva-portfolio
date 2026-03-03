import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Trophy, ChevronDown, ChevronUp, Tag } from 'lucide-react';

const projects = [
    {
        title: 'Secure Drone System for Defense',
        date: 'March 2025',
        category: 'Computer Vision / Robotics',
        tech: ['YOLOv8', 'Python', 'OpenCV', 'GCS', 'React'],
        description: 'Autonomous drone surveillance & threat detection system built for national defense applications.',
        points: [
            'Designed an autonomous drone system for surveillance and threat detection in defense applications.',
            'Integrated YOLOv8 for real-time object detection and facial recognition via live camera feed.',
            'Built a custom Ground Control Station (GCS) interface to monitor drone activity and control mission parameters.',
            'Implemented secure communication and modular architecture for various terrain deployments.',
            'Earned 2nd Runner-Up at Quest Global Ingenium Hackathon (2800+ teams, 30+ universities).',
        ],
        achievement: '2nd Runner-Up @ Quest Global Ingenium Hackathon',
        github: 'https://github.com/DhruvaKuntamukkala?tab=repositories',
        accent: '#8b5cf6',
    },
    {
        title: 'VYTAL – Health & Nutrition Tracker',
        date: 'July 2025',
        category: 'Mobile Development',
        tech: ['Flutter', 'Dart', 'REST API', 'Firebase'],
        description: 'Smart mobile app to track meals, calculate BMI, and manage daily health metrics.',
        points: [
            'Dynamic BMI calculator based on user profile with real-time updates.',
            'Meal logging with nutrient autofill via API integration.',
            'Real-time food suggestions with editing and deletion support.',
            'Customizable meal sections with drag-and-drop functionality.',
            'Quick access to Reminders, Medicine Info, and Calendar features.',
        ],
        github: 'https://github.com/DhruvaKuntamukkala?tab=repositories',
        accent: '#3b82f6',
    },
    {
        title: 'ARIA — Autonomous Responsive Intelligent Agent',
        date: 'February 2025',
        category: 'AI / Web Automation',
        tech: ['Python', 'LLM', 'Ollama', 'React', 'Vue', 'Browser API'],
        description: 'AI-driven browser automation agent that converts natural language commands into multi-step web workflows.',
        points: [
            'Built an AI-driven browser automation agent that converts natural language commands into multi-step web workflows (search, form filling, navigation).',
            'Designed a hybrid task planning system combining LLM-based reasoning with heuristic fallback for reliable execution across dynamic websites.',
            'Implemented multi-strategy element detection (semantic, text, proximity, LLM-generated selectors), achieving 95% first-attempt accuracy.',
            'Developed browser-native network-idle detection and retry mechanisms for dynamic SPAs (React/Vue), reducing timing failures by 80%.',
            'Integrated support for both local (Ollama) and cloud LLM providers for flexible and privacy-preserving AI deployment.',
        ],
        achievement: 'Samsung PRISM Hackathon',
        github: 'https://github.com/DhruvaKuntamukkala',
        accent: '#06b6d4',
    },
    {
        title: 'MINDX — Real-Time Multilingual Speech Translation',
        date: 'January 2026',
        category: 'AI / Speech Processing',
        tech: ['Python', 'Whisper', 'FastAPI', 'Speaker Diarization', 'JSON'],
        description: 'Real-time multilingual speech translation system converting Hindi, Telugu, and mixed-language speech into structured English transcripts.',
        points: [
            'Designed a real-time multilingual speech translation system converting Hindi, Telugu, and mixed-language speech into structured English transcripts.',
            'Implemented Whisper-based translation pipeline supporting file upload and live microphone input.',
            'Integrated speaker diarization and timestamp alignment for structured conversational analysis.',
            'Built JSON-based transcript storage for downstream AI applications.',
        ],
        github: 'https://github.com/DhruvaKuntamukkala',
        accent: '#a78bfa',
    },
];

const ProjectCard = ({ project, index }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card"
            style={{ padding: 'clamp(24px,4vw,44px)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
        >
            {/* Accent glow */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '180px',
                height: '180px',
                background: `radial-gradient(circle at top right, ${project.accent}18, transparent 70%)`,
                pointerEvents: 'none',
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '40px' }}>
                {/* Left */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                        <span style={{
                            padding: '4px 12px',
                            background: `${project.accent}15`,
                            border: `1px solid ${project.accent}30`,
                            borderRadius: '100px',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: project.accent,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                        }}>
                            {project.category}
                        </span>
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>{project.date}</span>
                    </div>

                    <h3 style={{ fontSize: 'clamp(1.2rem,2.5vw,1.7rem)', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.03em' }}>
                        {project.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>
                        {project.description}
                    </p>

                    {/* Tech badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                        {project.tech.map(t => (
                            <span
                                key={t}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    padding: '4px 10px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '6px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--text-secondary)',
                                }}
                            >
                                <Tag size={10} /> {t}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 18px', fontSize: '0.82rem', borderRadius: '100px' }}>
                                <Github size={16} /> View Code
                            </a>
                        )}
                        {project.achievement && (
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                background: 'rgba(139,92,246,0.1)',
                                border: '1px solid rgba(139,92,246,0.25)',
                                borderRadius: '100px',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                color: 'var(--purple-light)',
                            }}>
                                <Trophy size={14} /> {project.achievement}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right – Bullet points */}
                <div>
                    <button
                        onClick={() => setExpanded(v => !v)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-secondary)',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            marginBottom: '16px',
                            padding: 0,
                        }}
                    >
                        {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                        {expanded ? 'Hide' : 'Show'} Details
                    </button>

                    {/* Always show first 3 */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {project.points.slice(0, 3).map((pt, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: project.accent, flexShrink: 0, marginTop: '7px' }} />
                                {pt}
                            </li>
                        ))}
                    </ul>

                    <AnimatePresence>
                        {expanded && (
                            <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px', overflow: 'hidden' }}
                            >
                                {project.points.slice(3).map((pt, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: project.accent, flexShrink: 0, marginTop: '7px' }} />
                                        {pt}
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '56px' }}
                >
                    <p className="section-label">Portfolio</p>
                    <h2 className="section-title">
                        Notable <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        From hackathon winners to production apps — a selection of work that showcases my technical depth.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
