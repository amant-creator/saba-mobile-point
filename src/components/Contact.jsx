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
                                <a href="tel:+919022346385">+91 90223 46385</a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>💬</div>
                            <div className={styles.contactDetails}>
                                <h3>WhatsApp</h3>
                                <a href="https://wa.me/919022346385" target="_blank" rel="noopener noreferrer">
                                    Chat with us on WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>📍</div>
                            <div className={styles.contactDetails}>
                                <h3>Address</h3>
                                <p>Shop No. 96, Shantinagar Seva Sangh, Ambojwadi Azad Nagar, Malvani, Malad West<br /></p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>🕒</div>
                            <div className={styles.contactDetails}>
                                <h3>Business Hours</h3>
                                <p>Monday - Sunday: 9:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div ref={mapRef} className={`${styles.contactMap} fade-in`}>
                        <div className={styles.mapPlaceholder}>
                            <div className={styles.mapIcon}>🗺️</div>
                            <p>Visit Us at Our Location</p>
                            <a href="https://www.google.com/maps/place/Saba+Mobile+Point/@19.1739815,72.8102118,186m/data=!3m1!1e3!4m6!3m5!1s0x3be7b6812d5dc86d:0x44555042b9027389!8m2!3d19.1740714!4d72.8100815!16s%2Fg%2F11t6s9wxzp?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.btn}>
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
