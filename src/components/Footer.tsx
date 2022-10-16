import React from 'react';
import { useLocation } from 'wouter';
import FooterLink from './ui/FooterLink';
import Logo from '/src/assets/logo.svg';
import styles from '/src/styles/Footer.module.scss';

const Footer: React.FC = () => {
    const [location] = useLocation();
    const links = ['home', 'FAQ', 'more'];
    return (
        <footer id={styles.footer}>
            <img className={styles.logo} src={Logo} width={70} height={70} alt="" />
            <div className={styles.links}>
                {links.map((link, index) => {
                    return (
                        <FooterLink href={link === 'FAQ' ? 'faq' : link} text={link} location={location} key={index} />
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
