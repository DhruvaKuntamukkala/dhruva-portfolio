import React, { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
    const dotX = useSpring(0, { stiffness: 700, damping: 35 });
    const dotY = useSpring(0, { stiffness: 700, damping: 35 });
    const isHovering = useRef(false);
    const circleRef = useRef(null);

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice || window.innerWidth <= 1024) return;

        document.body.style.cursor = 'none';

        const move = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            dotX.set(e.clientX - 4);
            dotY.set(e.clientY - 4);
        };

        const hover = (e) => {
            const el = e.target;
            const hovering = el.tagName === 'A' || el.tagName === 'BUTTON' || el.closest('.btn') || el.closest('a') || el.closest('button');
            isHovering.current = !!hovering;
            if (circleRef.current) {
                circleRef.current.style.transform = hovering ? 'scale(2)' : 'scale(1)';
                circleRef.current.style.background = hovering ? 'rgba(139,92,246,0.12)' : 'transparent';
                circleRef.current.style.borderColor = hovering ? 'rgba(139,92,246,0.7)' : 'rgba(139,92,246,0.5)';
            }
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('mouseover', hover);

        return () => {
            document.body.style.cursor = '';
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', hover);
        };
    }, [cursorX, cursorY, dotX, dotY]);

    // Only render on desktop
    if (typeof window !== 'undefined' && window.innerWidth <= 1024) return null;

    return (
        <>
            <motion.div
                ref={circleRef}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid rgba(139,92,246,0.5)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: cursorX,
                    y: cursorY,
                    transition: 'transform 0.2s, background 0.2s, border-color 0.2s',
                    mixBlendMode: 'difference',
                }}
            />
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--purple)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: dotX,
                    y: dotY,
                }}
            />
        </>
    );
};

export default CustomCursor;
