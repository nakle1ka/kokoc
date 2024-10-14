'use client'

import { useRouter } from 'next/navigation';

import React from 'react';
import Image from 'next/image';

import styles from './newCard.module.scss'

type Props = {
    title: string;
    desc?: string;
    image: string;
    href: string;
}

export const NewCard: React.FC<Props> = ({ image, title, desc = "", href }) => {
    const router = useRouter()
    return (
        <div className={styles.container} onClick={() => router.push(href)} >
            <img
                src={image}
                alt='news logo'
                className={styles.image}
                loading='lazy'
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>
                {desc}
            </p>
        </div>
    );
}