import { useState } from 'react';
import { useNavbarScroll } from '../hooks/useNavbarScroll';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isScrolled = useNavbarScroll();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
            document.body.classList.remove('no-scroll');
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('no-scroll');
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.navContent}>
                    <a href="#home" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                        <span className={styles.logoIcon}>📱</span>
                        <span className={styles.logoText}>Saba Mobile Point</span>
                    </a>
                    <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                        <li>
                            <span className={styles.navLink} onClick={() => scrollToSection('home')}>Home</span>
                        </li>
                        <li>
                            <span className={styles.navLink} onClick={() => scrollToSection('services')}>Services</span>
                        </li>
                        <li>
                            <span className={styles.navLink} onClick={() => scrollToSection('products')}>Products</span>
                        </li>
                        <li>
                            <span className={styles.navLink} onClick={() => scrollToSection('contact')}>Contact</span>
                        </li>
                    </ul>
                    <div className={styles.navCta}>
                        <a href="tel:+919876543210" className="btn">Call Now</a>
                    </div>
                    <button
                        className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
