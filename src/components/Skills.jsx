import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Smartphone, Brain, Layers } from 'lucide-react';

const skillGroups = [
    {
        title: 'AI / ML',
        icon: <Brain size={22} />,
        color: '#8b5cf6',
        items: ['Python', 'YOLOv8', 'LangChain', 'Hugging Face', 'NLP', 'Transformers', 'FastAPI'],
    },
    {
        title: 'Web Technologies',
        icon: <Globe size={22} />,
        color: '#3b82f6',
        items: ['React', 'Node.js', 'Express', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Vite'],
    },
    {
        title: 'Mobile & No-Code',
        icon: <Smartphone size={22} />,
        color: '#06b6d4',
        items: ['Flutter', 'Dart', 'Flutterflow', 'Android Studio'],
    },
    {
        title: 'Foundations',
        icon: <Code2 size={22} />,
        color: '#a78bfa',
        items: ['Python', 'C', 'Data Structures', 'Algorithms', 'OOP'],
    },
    {
        title: 'Databases & Infra',
        icon: <Database size={22} />,
        color: '#34d399',
        items: ['MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'REST APIs'],
    },
    {
        title: 'Architecture',
        icon: <Layers size={22} />,
        color: '#f472b6',
        items: ['System Design', 'Agile / Scrum', 'CI/CD Basics', 'Microservices'],
    },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="section-label">Technical Stack</p>
                    <h2 className="section-title">
                        Tools I build <span className="gradient-text">great things</span> with
                    </h2>
                    <p className="section-subtitle">
                        A curated set of technologies and frameworks I use to architect, develop, and ship production-grade systems.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {skillGroups.map((group) => (
                        <motion.div
                            key={group.title}
                            variants={item}
                            className="glass-card"
                            whileHover={{ y: -6 }}
                            style={{ padding: '32px', borderRadius: '20px' }}
                        >
                            {/* Icon */}
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '14px',
                                background: `${group.color}18`,
                                border: `1px solid ${group.color}30`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: group.color,
                                marginBottom: '20px',
                            }}>
                                {group.icon}
                            </div>

                            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                                {group.title}
                            </h3>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {group.items.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        style={{
                                            padding: '5px 12px',
                                            borderRadius: '100px',
                                            background: `${group.color}10`,
                                            border: `1px solid ${group.color}25`,
                                            fontSize: '0.78rem',
                                            fontWeight: 600,
                                            color: group.color,
                                            cursor: 'default',
                                            display: 'inline-block',
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
