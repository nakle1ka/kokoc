'use client'

import React from 'react';
import { MainButton } from '@/components/ui/mainButton/mainButton';
import { useRouter } from 'next/navigation';

type Props = {
    href: number;
}

export const MatchButton: React.FC<Props> = ({ href }) => {
    const router = useRouter()
    return (
        <MainButton
            text='Матч-центр'
            onClick={() => router.push(`/matches/${href}`)}
        />
    );
}