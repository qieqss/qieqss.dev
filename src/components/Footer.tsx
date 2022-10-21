import React from 'react';
import Link from './ui/Link';
import Logo from '/logo.svg';
import styles from '/src/styles/components/Footer.module.scss';

const Footer: React.FC = () => {
    const links = ['Home', 'FAQ', 'More'];
    return (
        <footer id={styles.footer}>
            <div className={styles.logo} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
                <img className={`${styles.logo__img}`} src={Logo} width={70} height={70} alt="" />
                <h2 className={styles.popper}>
                    &lt; Top
                </h2>
            </div>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <Link href={link} text={link} key={index} />
                ))}
            </div>
        </footer>
    );
};

export default Footer;
