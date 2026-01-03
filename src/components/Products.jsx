import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Products.module.css';

const Products = () => {
    const headerRef = useScrollAnimation();

    const products = [
        { icon: '📱', title: 'Mobile Phones', description: 'Latest smartphones from top brands', delay: '0.1s' },
        { icon: '🔌', title: 'Chargers & Cables', description: 'Fast charging adapters and durable cables', delay: '0.2s' },
        { icon: '🛡️', title: 'Mobile Covers', description: 'Stylish and protective phone cases', delay: '0.3s' },
        { icon: '🎧', title: 'Headphones', description: 'Wired and wireless audio accessories', delay: '0.4s' },
        { icon: '💾', title: 'Memory Cards', description: 'High-speed storage solutions', delay: '0.5s' },
        { icon: '🔋', title: 'Power Banks', description: 'Portable charging on the go', delay: '0.6s' }
    ];

    return (
        <section className={styles.products} id="products">
            <div className="container">
                <div ref={headerRef} className={`${styles.sectionHeader} fade-in`}>
                    <h2 className={styles.sectionTitle}>Our Products</h2>
                    <p className={styles.sectionSubtitle}>Quality mobile products available in store</p>
                </div>
                <div className={styles.productsGrid}>
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProductCard = ({ icon, title, description, delay }) => {
    const cardRef = useScrollAnimation();

    return (
        <div ref={cardRef} className={`${styles.productCard} fade-in`} style={{ animationDelay: delay }}>
            <div className={styles.productIcon}>{icon}</div>
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={styles.productDescription}>{description}</p>
            <span className={styles.productBadge}>Available Here</span>
        </div>
    );
};

export default Products;
