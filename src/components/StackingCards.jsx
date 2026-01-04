import { useRef, useEffect } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './StackingCards.module.css';

const stackingData = [
    {
        title: 'Banking & Payments',
        description:
            'Fast and secure financial services including money transfers, bill payments, and loan repayments. All your banking needs in one place.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
        color: '#5196fd',
    },
    {
        title: 'Mobile & DTH Services',
        description:
            'Complete mobile solutions with instant recharges, premium accessories, and technical support. Quality products at affordable prices.',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop',
        color: '#8f89ff',
    },
    {
        title: 'Identity & Smart Cards',
        description:
            'Professional application services for PAN cards, Voter ID, Aadhaar PVC cards, and all government identity documents.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
        color: '#13006c',
    },
    {
        title: 'Business Registrations',
        description:
            'End-to-end registration services including GST, MSME, Food License (FSSAI), and other business compliance needs.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
        color: '#ed649e',
    },
    {
        title: 'Printing & Studio',
        description:
            'High-quality printing, scanning, and professional photography services. Urgent passport photos, xerox, lamination, and more.',
        image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&auto=format&fit=crop',
        color: '#fd521a',
    },
];

const StackingCards = () => {
    const container = useRef(null);
    const headerRef = useScrollAnimation();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <section className={styles.stackingSection} ref={container}>
            <div className={styles.introSection}>
                <div className="container">
                    <div ref={headerRef} className={`${styles.sectionHeader} fade-in`}>
                        <h2 className={styles.sectionTitle}>Our Service Categories</h2>
                        <p className={styles.sectionSubtitle}>
                            Discover comprehensive solutions designed for your every need
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.cardsContainer}>
                {stackingData.map((item, i) => {
                    const targetScale = 1 - (stackingData.length - i) * 0.05;
                    return (
                        <Card
                            key={`card_${i}`}
                            i={i}
                            {...item}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
};

const Card = ({ i, title, description, image, color, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className={styles.cardWrapper}>
            <motion.div
                style={{
                    backgroundColor: color,
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className={styles.card}
            >
                <h3 className={styles.cardTitle}>{title}</h3>
                <div className={styles.cardContent}>
                    <div className={styles.cardText}>
                        <p className={styles.cardDescription}>{description}</p>
                        <span className={styles.learnMore}>
                            <span>Learn more</span>
                            <svg
                                width="22"
                                height="12"
                                viewBox="0 0 22 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                    </div>

                    <div className={styles.cardImageWrapper}>
                        <motion.div className={styles.cardImageInner} style={{ scale: imageScale }}>
                            <img src={image} alt={title} className={styles.cardImage} />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default StackingCards;
