import { useState } from 'react';
import { useNavbarScroll } from '../hooks/useNavbarScroll';
import PillNav from './PillNav';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const isScrolled = useNavbarScroll();

    const navItems = [
        { label: 'Home', href: 'home' },
        { label: 'Services', href: 'services' },
        { label: 'Products', href: 'products' },
        { label: 'Contact', href: 'contact' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
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

                    <div className={styles.desktopNav}>
                        <PillNav
                            items={navItems}
                            activeHref={activeSection}
                            onItemClick={(item) => scrollToSection(item.href)}
                            baseColor="transparent"
                            pillColor="#f59e0b"
                            hoveredPillTextColor="#ffffff"
                            pillTextColor={isScrolled ? "#1f2937" : "#000000"}
                        />
                    </div>

                    <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <span
                                    className={`${styles.navLink} ${activeSection === item.href ? styles.activeLink : ''}`}
                                    onClick={() => scrollToSection(item.href)}
                                >
                                    {item.label}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.navCta}>
                        <a href="tel:+919022346385" className={styles.callButton}>Call Now</a>
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

