import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Services.module.css';

const Services = () => {
    const headerRef = useScrollAnimation();

    const categories = [
        {
            icon: '🏦',
            title: 'Banking & Payments',
            description: 'Fast and secure financial services including money transfers and bill payments.',
            features: [
                'Domestic Money Transfer',
                'Aadhaar & ATM Cash Withdrawal',
                'All Electricity Bill Payments',
                'All Type Loan Repayments',
                'Income Tax Return (ITR) Filing'
            ],
            delay: '0.1s'
        },
        {
            icon: '📱',
            title: 'Mobile & DTH Services',
            description: 'Complete mobile solutions and high-quality accessories for your devices.',
            features: [
                'All Mobile & Dish Recharge',
                'Premium Mobile Accessories',
                'New DTH Connections',
                'Technical Assistance',
                'Value Added Services'
            ],
            delay: '0.2s'
        },
        {
            icon: '🪪',
            title: 'Identity & Smart Cards',
            description: 'Professional application and processing for all government identity documents.',
            features: [
                'New PAN Card Application',
                'New Voter ID Application',
                'Aadhaar PVC Card Ordering',
                'Smart Card Printing (PAN/Voter)',
                'Aadhaar Smart Card Service'
            ],
            delay: '0.3s'
        },
        {
            icon: '📋',
            title: 'Business Registrations',
            description: 'End-to-end registration services for your business and legal requirements.',
            features: [
                'G.S.T. Registration',
                'Gumasta Licence Registration',
                'Udyam Aadhaar (MSME)',
                'Food Licence (FSSAI)',
                'Gazzete (Change of Name)',
                'Light Bill Name Transfer'
            ],
            delay: '0.4s'
        },
        {
            icon: '🖨️',
            title: 'Printing & Studio',
            description: 'High-quality printing, scanning, and professional photography services.',
            features: [
                'Urgent Passport Size Photos',
                'B/W & Colour Xerox (All Size)',
                'High-res Scan & Colour Print',
                'Lamination All Sizes',
                'Complete Stationary Items',
                'Document Formatting'
            ],
            delay: '0.5s'
        },
        {
            icon: '✈️',
            title: 'Travel & Stationery',
            description: 'One-stop shop for travel bookings and essential stationary items.',
            features: [
                'Train Ticket Booking',
                'Flight Ticket Booking',
                'Bus Ticket Booking',
                'Instant Booking Confirmations'
            ],
            delay: '0.6s'
        }
    ];

    return (
        <section className={styles.services} id="services">
            <div className="container">
                <div ref={headerRef} className={`${styles.sectionHeader} fade-in`}>
                    <h2 className={styles.sectionTitle}>Our Extensive Services</h2>
                    <p className={styles.sectionSubtitle}>Saba Mobile Point - Your trusted partner for all digital and utility needs</p>
                </div>
                <div className={styles.servicesGrid}>
                    {categories.map((category, index) => (
                        <ServiceCard key={index} {...category} />
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
                    <li
                        key={index}
                        className={styles.featureItem}
                        style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                    >
                        <span className={styles.checkIcon}>✔</span>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;

