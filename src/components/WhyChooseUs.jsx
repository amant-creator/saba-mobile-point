import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
    const headerRef = useScrollAnimation();

    const features = [
        { icon: '⚡', title: 'Fast Service', description: 'Quick turnaround time for all services', delay: '0.1s' },
        { icon: '🔒', title: 'Secure Payments', description: '100% safe and encrypted transactions', delay: '0.2s' },
        { icon: '⭐', title: 'Trusted Local Shop', description: 'Serving the community with reliability', delay: '0.3s' },
        { icon: '🎯', title: 'All-in-One Place', description: 'Complete mobile solutions under one roof', delay: '0.4s' }
    ];

    return (
        <section className={styles.whyChoose}>
            <div className="container">
                <div ref={headerRef} className={`${styles.sectionHeader} fade-in`}>
                    <h2 className={styles.sectionTitle}>Why Choose Us</h2>
                    <p className={styles.sectionSubtitle}>Your trusted local mobile service partner</p>
                </div>
                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <FeatureItem key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon, title, description, delay }) => {
    const itemRef = useScrollAnimation();

    return (
        <div ref={itemRef} className={`${styles.featureItem} fade-in`} style={{ animationDelay: delay }}>
            <div className={styles.featureIcon}>{icon}</div>
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDescription}>{description}</p>
        </div>
    );
};

export default WhyChooseUs;
