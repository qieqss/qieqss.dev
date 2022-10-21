import React from 'react';
import styles from "/src/styles/components/ui/Question.module.scss";

interface Props {
    question: string;
    answer: string;
}

const Qna: React.FC<Props> = ({ question, answer }: Props) => {
    return (
        <div className={styles.qna}>
            <h1 className={styles.question}>{question}</h1>
            <p className={styles.answer}>{answer}</p>
        </div>
    );
};

export default Qna;
