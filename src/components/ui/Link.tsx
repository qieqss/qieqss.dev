import React  from 'react';
import { useLocation } from 'wouter';
import styles from '/src/styles/components/ui/Link.module.scss';

interface Props {
    href: string;
    text: string;
}

const NavLink: React.FC<Props> = ({ href, text }: Props) => {
    const [location, setLocation] = useLocation();
    const lowerCaseHref = href.toLowerCase()
    const isActive = location === (lowerCaseHref === 'home' ? '/' : '/' + lowerCaseHref);
    return (
        <a
            className={`${styles.link} ${isActive ? styles['link--active'] : ''}`}
            onClick={() => setLocation(lowerCaseHref === 'home' ? '/' : lowerCaseHref)}
        >
            {text}
        </a>
    );
};

export default NavLink;
