import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice || window.innerWidth <= 1024) return;

        setIsVisible(true);
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.btn')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid var(--secondary-color)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                    mixBlendMode: 'difference',
                    transition: { type: 'spring', damping: 20, stiffness: 200 }
                }}
            />
            <motion.div
                style={{
                    position: 'fixed',
                    left: mousePosition.x - 4,
                    top: mousePosition.y - 4,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--secondary-color)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transition: { type: 'spring', damping: 30, stiffness: 300 }
                }}
            />
        </>
    );
};

export default CustomCursor;
