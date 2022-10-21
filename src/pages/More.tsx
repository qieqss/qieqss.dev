import React from 'react';
import Nav from '../components/Nav';
import styles from '/src/styles/pages/More.module.scss';

const More: React.FC = () => {
    return (
        <div className="row">
            <Nav />
            <div className={styles.text}>
                <h1 className={styles.title}>More</h1>
                <p className={styles.description}>
                    This page was a result of me not wanting to overpopulate the navbar. Mostly random things which
                    might interest you.
                </p>
            </div>
        </div>
    );
};

export default More;
