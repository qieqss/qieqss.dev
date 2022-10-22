import React from 'react';
import { motion } from 'framer-motion';
import styles from '/src/styles/components/ui/ProjectCard.module.scss';
import { useLocation } from 'wouter';

interface Props {
    link: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<Props> = ({ link, title, description }: Props) => {
    const [, setLocation] = useLocation();

    return (
        <motion.div onClick={() => setLocation(link)} whileHover={{ scale: 1.05 }} className={styles.project}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </motion.div>
    );
};

export default ProjectCard;
