import React from 'react';
import Nav from '../components/Nav';
import CustomQna from '../components/ui/CustomQna';
import Qna from '../components/ui/Qna';
import styles from '/src/styles/pages/Faq.module.scss';

const Faq: React.FC = () => {
    return (
        <div className="row">
            <Nav />
            <div className={styles.text}>
                <h1 className={styles.title}>FAQ</h1>
                <p className={styles.description}>These are some questions that are asked to me pretty frequently.</p>

                <div className={styles.questions}>
                    <Qna question="When did you start coding?" answer="In March 2022." />
                    <Qna question="How did you learn to code?" answer="I built a lot of stuff." />
                    <CustomQna question="Which programming languages do you know?">
                        <p>
                            I&apos;m most comfortable with{' '}
                            <a
                                className={styles.answer__anchor}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.typescriptlang.org/"
                            >
                                TypeScript{' '}
                            </a>
                            and{' '}
                            <a
                                className={styles.answer__anchor}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.python.org/"
                            >
                                Python
                            </a>
                            . I also write{' '}
                            <a
                                className={styles.answer__anchor}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.rust-lang.org/"
                            >
                                Rust{' '}
                            </a>
                            sometimes.
                        </p>
                    </CustomQna>
                    <Qna
                        question="What are you working on right now?"
                        answer="Nothing too fancy at the moment. Mostly studying."
                    />
                    <CustomQna question="What code editor do you use?">
                        <p>
                            I always use{' '}
                            <a
                                className={styles.answer__anchor}
                                target="_blank"
                                rel="noreferrer"
                                href="https://code.visualstudio.com/"
                            >
                                Visual Studio Code
                            </a>
                            .
                        </p>
                    </CustomQna>
                    <CustomQna question="What theme do you use?">
                        <p>
                            I consistently use the default{' '}
                            <a
                                className={styles.answer__anchor}
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/microsoft/vscode/blob/main/extensions/theme-defaults/themes/dark_plus.json"
                            >
                                Dark+
                            </a>
                            , I feel like it&apos;s the only good theme nowadays.
                        </p>
                    </CustomQna>
                    <CustomQna question="What font do you use when coding?">
                        <p>
                            I have always used{' '}
                            <a
                                className={styles.answer__anchor}
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/adobe-fonts/source-code-pro"
                            >
                                Source Code Pro
                            </a>
                            .
                        </p>
                    </CustomQna>
                </div>
            </div>
        </div>
    );
};

export default Faq;
