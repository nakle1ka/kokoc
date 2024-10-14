'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { MainButton } from '@/components/ui/mainButton/mainButton';

import styles from "./matchBtn.module.scss";

type Props = {
    href: string;
}

export const MatchBtn: React.FC<Props> = ({ href }) => {
    const router = useRouter()
    return (
        <MainButton
            text='Матч-центр'
            onClick={() => router.push(href)}
            id={styles.btn}
        />
    );
}