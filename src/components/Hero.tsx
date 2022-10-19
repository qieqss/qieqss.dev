import React from 'react';
import Picture from '/src/assets/pic.jpg';
import { FiGithub, FiMail } from 'react-icons/fi';
import styles from '/src/styles/Hero.module.scss';
import Nav from './Nav';

const Hero: React.FC = () => {
    return (
        <section id={styles.hero}>
            <Nav />
            <header className={styles.header}>
                <img className={styles.logo} src={Picture} width="165" height="165" alt="" />
                <h1 className={styles.title}>qieqss</h1>
                <p className={styles.description}>
                    Hi, I&apos;m Alexey. I&apos;m a 16 y/o software engineer and I like to build cool stuff{' '}
                </p>
                <div className={styles.links}>
                    <a
                        className={styles.link}
                        href="https://github.com/qieqss"
                        title="GitHub"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a
                        className={styles.link}
                        href="mailto:kulakovalexey@proton.me"
                        title="Email"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiMail size={20} />
                    </a>
                </div>
            </header>
        </section>
    );
};

export default Hero;
