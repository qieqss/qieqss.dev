import React from 'react';
import { useLocation } from 'wouter';
import NavLink from './ui/NavLink';
import styles from '/src/styles/Nav.module.scss';

const Nav: React.FC = () => {
    const [location] = useLocation();
    const links = ['home', 'blog', 'guestbook', 'FAQ', 'more'];
    return (
        <nav id={styles.nav}>
            {links.map((link, index) => (
                <NavLink href={link === 'FAQ' ? 'faq' : link} text={link} location={location} key={index} />
            ))}
        </nav>
    );
};

export default Nav;
