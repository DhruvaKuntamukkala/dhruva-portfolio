import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Smartphone, Terminal } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Foundations',
            icon: <Terminal size={24} />,
            items: ['Python', 'C', 'Data Structures', 'Algorithms']
        },
        {
            title: 'Web Technologies',
            icon: <Globe size={24} />,
            items: ['React', 'Node.js', 'Express', 'Django', 'HTML5', 'CSS3', 'JavaScript']
        },
        {
            title: 'Mobile & No-Code',
            icon: <Smartphone size={24} />,
            items: ['DART', 'Flutter', 'Flutterflow']
        },
        {
            title: 'Databases & Tools',
            icon: <Database size={24} />,
            items: ['MongoDB', 'PostgreSQL', 'Git', 'YOLOv8', 'Vite']
        }
    ];

    return (
        <section id="skills" className="container" style={{ padding: '100px 0' }}>
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Technical Expertise</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '60px', fontSize: '1.1rem', maxWidth: '600px' }}>
                    A comprehensive toolkit of technologies and frameworks I use to bring complex ideas to life.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '32px'
                }}>
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            style={{
                                padding: '40px',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '24px',
                                height: '100%',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                background: 'rgba(99, 102, 241, 0.1)',
                                color: 'var(--secondary-color)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px'
                            }}>
                                {group.icon}
                            </div>

                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em' }}>
                                {group.title}
                            </h3>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {group.items.map(item => (
                                    <span
                                        key={item}
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: '8px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--glass-border)',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)',
                                            fontWeight: 600,
                                            transition: 'all 0.2s'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.color = 'var(--text-primary)';
                                            e.currentTarget.style.borderColor = 'var(--secondary-color)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = 'var(--text-secondary)';
                                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
