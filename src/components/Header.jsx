import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, FileText } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.setAttribute('data-theme', !isDark ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        padding: isScrolled ? '15px 0' : '30px 0',
        background: isScrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '1.2rem', fontWeight: 800 }}>
          {/* Logo removed as requested */}
        </div>

        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className="nav-links" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link-item"
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  transition: 'color 0.2s',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={toggleTheme}
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                padding: '8px',
                borderRadius: '10px',
                transition: 'all 0.2s'
              }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
