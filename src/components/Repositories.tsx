import React from 'react';
import axios, { AxiosResponse } from 'axios';
import styles from '/src/styles/components/Repositories.module.scss';
import Repository from './ui/Repository';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Repositories: React.FC = () => {
    interface PinnedRepository {
        name: string;
        repo: string;
        description: string;
        demo: string;
        language: { name: string; color: string };
        stars: number;
        forks: number;
    }

    interface Repository {
        fork: boolean;
        stargazers_count: number;
    }

    interface GitHubStats {
        totalRepos: number;
        stars: number;
    }

    const [pinnedRepos, setPinnedRepos] = React.useState<PinnedRepository[]>([]);
    const [githubStats, setGithubStats] = React.useState<GitHubStats>({ totalRepos: 0, stars: 0 });

    React.useEffect(() => {
        async function fetchGithubStats() {
            const githubStats: AxiosResponse<Repository[]> = await axios.get(
                'https://api.github.com/users/qieqss/repos?per_page=100',
            );
            const repos = githubStats.data as Repository[];

            const mine = repos.filter((repo) => !repo.fork);
            const stars = mine.reduce((acc, repo) => {
                return acc + repo.stargazers_count;
            }, 0);

            const githubStatsData = {
                totalRepos: mine.length,
                stars,
            };

            setGithubStats(githubStatsData);
        }
        async function fetchPinnedRepos() {
            const pinnedRepositories: AxiosResponse<PinnedRepository[]> = await axios.get(
                'https://gh-pinned-repos-api.ysnirix.xyz/api/get/?username=qieqss',
            ).then((res) => res.data.response);
            const pinnedRepositoriesData = pinnedRepositories as unknown;
            setPinnedRepos(pinnedRepositoriesData as PinnedRepository[]);
        }

        fetchGithubStats();
        fetchPinnedRepos();
    }, []);

    return (
        <section id={styles.repositories}>
            <h1 className={styles.title}>Things I&apos;ve built</h1>
            <p className={styles.description}>
                Currently, I have <strong>{githubStats.totalRepos}</strong> public repositories which have earned me{' '}
                <strong>{githubStats.stars}</strong> stars!
            </p>
            <div className={styles.repositories}>
                {pinnedRepos.map((project, index) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, translateY: 100 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.08 }}
                            key={project.repo}
                        >
                            <Repository
                                link={project.repo}
                                title={project.name}
                                description={project.description}
                                languageColor={project.language.color}
                                languageName={project.language.name}
                                stars={project.stars}
                                forks={project.forks}
                            />
                        </motion.div>
                    );
                })}
            </div>
            <Footer />
        </section>
    );
};

export default Repositories;
