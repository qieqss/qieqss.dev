import React from 'react';
import NavLink from './ui/NavLink';
import styles from '/src/styles/Nav.module.scss';

const Nav: React.FC = () => {
    const links = ['home', 'blog', 'guestbook', 'FAQ', 'more'];
    return (
        <nav id={styles.nav}>
            {links.map((link, index) => (
                <NavLink href={link === 'FAQ' ? 'faq' : link} text={link} key={index} />
            ))}
        </nav>
    );
};

export default Nav;
