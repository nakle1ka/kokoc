'use client'

import React from 'react';
import styles from './mainButton.module.scss'

type Props = {
    text: string;
    onClick: (() => void) | undefined;
    id?: string;
}

export const MainButton: React.FC<Props> = ({ text, onClick, id = "" }) => {
    return (
        <button id={id} className={styles.btn} onClick={onClick}>
            <span className={styles.text}>
                {text}
            </span>
        </button>
    );
}