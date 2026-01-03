import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Contact.module.css';

const Contact = () => {
    const headerRef = useScrollAnimation();
    const infoRef = useScrollAnimation();
    const mapRef = useScrollAnimation();

    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <div ref={headerRef} className={`${styles.sectionHeader} fade-in`}>
                    <h2 className={styles.sectionTitle}>Get In Touch</h2>
                    <p className={styles.sectionSubtitle}>Visit us or reach out for any queries</p>
                </div>
                <div className={styles.contactGrid}>
                    <div ref={infoRef} className={`${styles.contactInfo} fade-in`}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>📞</div>
                            <div className={styles.contactDetails}>
                                <h3>Phone Number</h3>
                                <a href="tel:+919876543210">+91 98765 43210</a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>💬</div>
                            <div className={styles.contactDetails}>
                                <h3>WhatsApp</h3>
                                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                                    Chat with us on WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>📍</div>
                            <div className={styles.contactDetails}>
                                <h3>Address</h3>
                                <p>Shop No. 12, Main Market Road<br />Near City Center, Your City - 123456</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>🕒</div>
                            <div className={styles.contactDetails}>
                                <h3>Business Hours</h3>
                                <p>Monday - Saturday: 9:00 AM - 9:00 PM<br />Sunday: 10:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div ref={mapRef} className={`${styles.contactMap} fade-in`}>
                        <div className={styles.mapPlaceholder}>
                            <div className={styles.mapIcon}>🗺️</div>
                            <p>Visit Us at Our Location</p>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.btn}>
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
