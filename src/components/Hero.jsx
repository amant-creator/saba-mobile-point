import { useTypingEffect } from '../hooks/useTypingEffect';
import LightRays from './LightRays';
import styles from './Hero.module.css';

const Hero = () => {
    const texts = [
        "All Mobile Services & Bill Payments",
        "Instant Money Transfer & Recharges",
        "Premium Mobile Accessories",
        "Trusted Local Mobile Repair"
    ];

    const displayedText = useTypingEffect(texts);

    return (
        <section className={styles.hero} id="home">
            <div className={styles.heroBackground}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={0.8}
                    lightSpread={1.5}
                    rayLength={1.2}
                    mouseInfluence={0.15}
                    noiseAmount={0.05}
                />
            </div>
            <div className="container">
                <div className={`${styles.heroContent} fade-in`}>
                    <h1 className={styles.heroTitle}>Saba Mobile Point</h1>
                    <p className={styles.heroSubtitle}>
                        {displayedText}<span className={styles.cursor}>|</span>
                    </p>
                    <p className={styles.heroDescription}>
                        Your trusted local shop for mobile recharge, bill payments, accessories, and money transfer services
                    </p>
                    <div className={styles.heroCta}>
                        <a href="tel:+919876543210" className={`${styles.btn} ${styles.btnPrimary}`}>
                            <span className={styles.btnIcon}>📞</span> Call Now
                        </a>
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`}>
                            <span className={styles.btnIcon}>💬</span> WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollArrow}></div>
            </div>
        </section>
    );
};

export default Hero;
