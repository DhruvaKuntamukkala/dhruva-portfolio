import React from 'react';
import { motion } from 'framer-motion';
import { FileText, User, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Hero = () => {
    const containerVars = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVars = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
    };

    return (
        <section id="hero" style={{
            background: 'var(--bg-color)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, var(--secondary-color), transparent 70%)',
                    opacity: 0.07,
                    filter: 'blur(60px)',
                    zIndex: 0
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div
                        variants={itemVars}
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            border: '3px solid var(--secondary-color)',
                            marginBottom: '40px',
                            overflow: 'hidden',
                            background: 'var(--glass-bg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            boxShadow: '0 0 30px rgba(99, 102, 241, 0.2)'
                        }}
                    >
                        <img
                            src="/profile.jpg"
                            alt="Dhruva Kuntamukkala"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>

                    <motion.div
                        variants={itemVars}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '32px'
                        }}
                    >
                        <span style={{
                            width: '40px',
                            height: '2px',
                            background: 'var(--secondary-color)',
                            display: 'inline-block'
                        }} />
                        <p style={{
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: 'var(--secondary-color)',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase'
                        }}>
                            Software Engineer & AI Enthusiast
                        </p>
                    </motion.div>

                    <motion.h1
                        variants={itemVars}
                        style={{
                            fontSize: 'clamp(3rem, 10vw, 7rem)',
                            lineHeight: 0.9,
                            marginBottom: '40px',
                            fontWeight: 800,
                            letterSpacing: '-0.05em'
                        }}
                    >
                        Dhruva <br />
                        <span style={{
                            color: 'transparent',
                            WebkitTextStroke: '1px var(--text-secondary)',
                            opacity: 0.5
                        }}>Kuntamukkala</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVars}
                        style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '650px',
                            marginBottom: '48px',
                            lineHeight: 1.6,
                            fontWeight: 400
                        }}
                    >
                        Crafting intelligent digital experiences through <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Computer Vision</span> and <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Modern Web Technologies</span> at Manipal Institute of Technology.
                    </motion.p>

                    <motion.div variants={itemVars} style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1rem', borderRadius: '12px' }}>
                            View Projects <ArrowRight size={20} />
                        </a>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            {[
                                { icon: Github, url: 'https://github.com/DhruvaKuntamukkala?tab=repositories' },
                                { icon: Linkedin, url: 'https://www.linkedin.com/in/dhruva-kuntamukkala/' },
                                { icon: Instagram, url: 'https://www.instagram.com/dhruva.1235/?hl=en' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'var(--glass-bg)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--text-primary)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                                        e.currentTarget.style.borderColor = 'var(--secondary-color)';
                                        e.currentTarget.style.background = 'rgba(99, 102, 241, 0.05)';
                                        e.currentTarget.style.color = 'var(--secondary-color)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                                        e.currentTarget.style.background = 'var(--glass-bg)';
                                        e.currentTarget.style.color = 'var(--text-primary)';
                                    }}
                                >
                                    <social.icon size={22} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                }}
            >
                <div style={{
                    width: '24px',
                    height: '40px',
                    borderRadius: '12px',
                    border: '2px solid var(--glass-border)',
                    position: 'relative'
                }}>
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                            width: '4px',
                            height: '8px',
                            borderRadius: '2px',
                            background: 'var(--secondary-color)',
                            position: 'absolute',
                            left: '50%',
                            marginLeft: '-2px',
                            top: '8px'
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
