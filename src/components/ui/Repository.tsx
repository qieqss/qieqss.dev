import React from 'react';
import styles from '/src/styles/ui/Repository.module.scss';
import { FiStar } from 'react-icons/fi';
import { BiGitRepoForked } from 'react-icons/bi';
import { motion } from 'framer-motion';

interface Props {
    link: string;
    title: string;
    description: string;
    languageColor: string;
    language: string;
    stars: number;
    forks: number;
}

const Repository: React.FC<Props> = ({ link, title, description, languageColor, language, stars, forks }: Props) => {
    return (
        <motion.a
            whileHover={{ scale: 1.05 }}
            className={styles.repository}
            style={{ textDecoration: 'none' }}
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.bottom}>
                <div className={styles.language}>
                    <span style={{ color: languageColor }}>⬤</span> {language}
                </div>
                <div className={styles.statistics}>
                    <div className={styles.stars}>
                        <FiStar fontSize={16} /> {stars}
                    </div>
                    <div className={styles.forks}>
                        <BiGitRepoForked fontSize={16} /> {forks}
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

export default Repository;
