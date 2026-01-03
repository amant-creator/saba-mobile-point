import styles from './Footer.module.css';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Saba Mobile Point</h3>
                        <p className={styles.footerDescription}>
                            Your one-stop solution for all mobile services, bill payments, and accessories.
                        </p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Quick Links</h4>
                        <ul className={styles.footerLinks}>
                            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
                            <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a></li>
                            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Our Services</h4>
                        <ul className={styles.footerLinks}>
                            <li>Mobile Recharge</li>
                            <li>Bill Payments</li>
                            <li>Mobile Accessories</li>
                            <li>Money Transfer</li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Contact Us</h4>
                        <ul className={styles.footerLinks}>
                            <li>📞 +91 98765 43210</li>
                            <li>💬 WhatsApp Available</li>
                            <li>📍 Main Market Road</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; 2026 Saba Mobile Point. All rights reserved.</p>
                    <p className={styles.footerCredit}>Designed for Saba Mobile Point</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
