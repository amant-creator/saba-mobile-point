import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Services.module.css';

const Services = () => {
    const headerRef = useScrollAnimation();

    const services = [
        {
            icon: '📱',
            title: 'Mobile Recharge',
            description: 'Quick prepaid recharge and postpaid bill payment for all major operators',
            features: ['Prepaid Recharge', 'Postpaid Bill Payment', 'Instant Activation'],
            delay: '0.1s'
        },
        {
            icon: '💡',
            title: 'Utility Bill Payments',
            description: 'Pay your electricity and water bills instantly without any hassle',
            features: ['Electricity Bill', 'Water Bill', 'No Extra Charges'],
            delay: '0.2s'
        },
        {
            icon: '🔌',
            title: 'Mobile Accessories',
            description: 'Wide range of quality mobile accessories at affordable prices',
            features: ['Chargers & Cables', 'Mobile Covers', 'Screen Guards'],
            delay: '0.3s'
        },
        {
            icon: '💸',
            title: 'Money Transfer',
            description: 'Fast and secure money transfer services through UPI and bank transfer',
            features: ['UPI Transfer', 'Bank Transfer', 'Secure & Fast'],
            delay: '0.4s'
        }
    ];

    return (
        <section className={styles.services} id="services">
            <div className="container">
                <div ref={headerRef} className={`${styles.sectionHeader} fade-in`}>
                    <h2 className={styles.sectionTitle}>Our Services</h2>
                    <p className={styles.sectionSubtitle}>Complete mobile and utility solutions at your doorstep</p>
                </div>
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ icon, title, description, features, delay }) => {
    const cardRef = useScrollAnimation();

    return (
        <div ref={cardRef} className={`${styles.serviceCard} fade-in`} style={{ animationDelay: delay }}>
            <div className={styles.serviceIcon}>{icon}</div>
            <h3 className={styles.serviceTitle}>{title}</h3>
            <p className={styles.serviceDescription}>{description}</p>
            <ul className={styles.serviceFeatures}>
                {features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
