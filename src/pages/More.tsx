import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ProjectCard from '../components/ui/ProjectCard';
import styles from '/src/styles/pages/More.module.scss';

const More: React.FC = () => {
    const projects = [
        {
            link: '/about',
            title: 'About Me',
            description: 'More about me. How I got into coding, my other interests, etc.',
        },
        {
            link: '/now-playing',
            title: 'Now Playing',
            description: 'Currently playing song on Spotify. This is being read from my Discord status',
        },
    ];

    return (
        <div className="row">
            <Nav />
            <div className={styles.text}>
                <h1 className={styles.title}>More</h1>
                <p className={styles.description}>
                    This page was a result of me not wanting to overpopulate the navbar. Mostly random things which
                    might interest you.
                </p>
                <div className={styles.projects}>
                    {projects.map((project) => (
                        <ProjectCard
                            link={project.link}
                            title={project.title}
                            description={project.description}
                            key={project.title}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default More;
