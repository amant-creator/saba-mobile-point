import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './PillNav.module.css';

const PillNav = ({
    logo,
    logoAlt,
    items = [],
    activeHref = '/',
    className = '',
    baseColor = '#ffffff',
    pillColor = '#f59e0b',
    hoveredPillTextColor = '#ffffff',
    pillTextColor = '#1f2937',
    onItemClick
}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const index = items.findIndex(item => item.href === activeHref);
        if (index !== -1) setActiveIndex(index);
    }, [activeHref, items]);

    return (
        <div
            className={`${styles.navContainer} ${className}`}
            style={{ '--base-color': baseColor }}
            ref={containerRef}
        >
            {logo && (
                <div className={styles.logoContainer}>
                    <img src={logo} alt={logoAlt} className={styles.logo} />
                </div>
            )}

            <div className={styles.navItems}>
                {items.map((item, index) => {
                    const isActive = activeIndex === index;
                    const isHovered = hoveredIndex === index;

                    return (
                        <div
                            key={item.label}
                            className={styles.navItemWrapper}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => {
                                setActiveIndex(index);
                                if (onItemClick) onItemClick(item);
                            }}
                        >
                            <span
                                className={styles.navLabel}
                                style={{
                                    color: isHovered || isActive ? hoveredPillTextColor : pillTextColor,
                                    zIndex: 2
                                }}
                            >
                                {item.label}
                            </span>

                            {/* Active Pill Indicator */}
                            {isActive && (
                                <motion.div
                                    layoutId="activePill"
                                    className={styles.activePill}
                                    style={{ backgroundColor: pillColor }}
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}

                            {/* Hover Pill Indicator */}
                            {isHovered && !isActive && (
                                <motion.div
                                    layoutId="hoverPill"
                                    className={styles.hoverPill}
                                    style={{ backgroundColor: `${pillColor}33` }} // 20% opacity
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PillNav;
