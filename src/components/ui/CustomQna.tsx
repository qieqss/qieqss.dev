import React from 'react';
import styles from "/src/styles/components/ui/CustomQna.module.scss";

interface Props {
    question: string;
    children: React.ReactNode;
}

const CustomQna: React.FC<Props> = ({ question, children }: Props) => {
    return (
        <div className={styles.qna}>
            <h1 className={styles.question}>{question}</h1>
            {children}
        </div>
    );
};

export default CustomQna;
