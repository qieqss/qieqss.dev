import React from 'react';
import styles from '/src/styles/pages/About.module.scss';
import Nav from '../components/Nav';
import { useLocation } from 'wouter';
import Footer from '../components/Footer';

const About: React.FC = () => {
    const [, setLocation] = useLocation();
    return (
        <div className="row">
            <Nav />
            <div className={styles.text}>
                <h1 className={styles.title}>About Me</h1>
                <p className={styles.paragraph}>
                    Hi, I&apos;m <strong>Alexey</strong>, commonly known as{' '}
                    <a onClick={() => setLocation('/')} className={styles.anchor} target="_blank" rel="noreferrer">
                        qieqss
                    </a>{' '}
                    online. I&apos;m from and live (for now) in Russia. We got Computer Science in our school in 9th
                    grade, and since then it has been my favourite subject at school, even though they taught us "
                    <a
                        className={styles.anchor}
                        href="https://en.wikipedia.org/wiki/Logo_(programming_language)"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Logo
                    </a>
                    " which is not so enjoyable. I&apos;m hoping to study Computer Science in university.
                </p>
                <p className={styles.paragraph}>
                    For hobbies other than coding, I really like playing the{' '}
                    <a
                        className={styles.anchor}
                        href="https://en.wikipedia.org/wiki/Saxophone"
                        target="_blank"
                        rel="noreferrer"
                    >
                        saxophone
                    </a>
                    , listening to music and going on trips with friends. I used to like reading books but I
                    haven&apos;t read one for a long time now, simply because I have no time. I listen to a lot of music
                    and it has always been a big part of my life.
                </p>
                <p className={styles.paragraph}>
                    In 2020 I started learning{' '}
                    <a className={styles.anchor} href="https://www.javascript.com/" target="_blank" rel="noreferrer">
                        JavaScript
                    </a>{' '}
                    from{' '}
                    <a className={styles.anchor} href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">
                        freeCodeCamp
                    </a>{' '}
                    in my free time because I felt like I was just wasting a lot of time, so I wanted to learn stuff
                    that I will actually use in my life. I made some Discord bots, wrote some cool scripts. Eventually I
                    got into web development and I absolutely love it. Lately I&apos;ve been dwelling into some{' '}
                    <a className={styles.anchor} href="https://www.rust-lang.org/" target="_blank" rel="noreferrer">
                        Rust
                    </a>{' '}
                    as well because I think that&apos;s the future. I haven&apos;t gotten into it a lot because frankly
                    I have no time.
                </p>
            </div>

            <Footer />
        </div>
    );
};

export default About;
