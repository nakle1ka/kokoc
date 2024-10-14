'use client'

import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';

import styles from "./matchTableItem.module.scss"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
    date: string;
    t1Logo: string;
    t1Name: string;
    t1Points: number;

    t2Logo: string;
    t2Name: string;
    t2Points: number;

    name: string;
}

export const MatchTableItem: React.FC<Props> = ({
    date, name, t1Logo, t1Name, t1Points, t2Logo, t2Name, t2Points
}) => {
    const router = useRouter()

    return (
        <TableRow className={styles.row} onClick={() => router.push("/matches/1")}>
            <TableCell className="font-medium">{date}</TableCell>

            <TableCell className={styles.team}>
                <img src={t1Logo} alt="team logo" className={styles.logo} />
                <span className={styles.name}>{t1Name}</span>
            </TableCell>

            <TableCell className={styles.points}>
                {
                    t1Points !== -1
                        ? `${t1Points} : ${t2Points}`
                        : `Предстоит`
                
                }
            </TableCell>

            <TableCell className={styles.team}>
                <img src={t2Logo} alt="team logo" className={styles.logo} />
                <span className={styles.name}>{t2Name}</span>
            </TableCell>

            <TableCell className="text-right">{name}</TableCell>
        </TableRow>
    );
}