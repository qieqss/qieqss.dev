import React from 'react';
import { useLocation } from 'wouter';
import styles from '/src/styles/ui/NavLink.module.scss';

interface Props {
    href: string;
    text: string;
    location: string;
}

const NavLink: React.FC<Props> = ({ href, text, location }: Props) => {
    const [_, setLocation] = useLocation();
    const isActive = location === (href === 'home' ? '/' : '/' + href);
    return (
        <a
            className={`${styles.link} ${isActive ? styles['link--active'] : ''} capitalize`}
            onClick={() => setLocation(href === 'home' ? '/' : href)}
        >
            {text}
        </a>
    );
};

export default NavLink;
