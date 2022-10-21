import React from 'react';
import Link from './ui/Link';
import styles from '/src/styles/components/Nav.module.scss';

const Nav: React.FC = () => {
    const links = ['Home', 'FAQ', 'More'];
    return (
        <nav id={styles.nav}>
            {links.map((link, index) => (
                <Link href={link === 'FAQ' ? 'faq' : link} text={link} key={index} />
            ))}
        </nav>
    );
};

export default Nav;
