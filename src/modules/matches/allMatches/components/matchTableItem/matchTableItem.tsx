'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { TableCell, TableRow } from '@/components/ui/table';

import { TMatch } from '@/types/matchType';

import styles from "./matchTableItem.module.scss"

type Props = {
    matchData: TMatch;
}

export const MatchTableItem: React.FC<Props> = ({ matchData }) => {
    const router = useRouter()

    return (
        <TableRow className={styles.row} onClick={() => router.push(`/matches/${matchData.id}`)}>
            <TableCell className="font-medium">{matchData.date}</TableCell>

            <TableCell className={styles.team}>
                <img src={matchData.t1logo} alt="team logo" className={styles.logo} />
                <span className={styles.name}>{matchData.t1name}</span>
            </TableCell>

            <TableCell className={styles.points}>
                {
                    matchData.t1points !== -1
                        ? `${matchData.t1points} : ${matchData.t2points}`
                        : `Предстоит`

                }
            </TableCell>

            <TableCell className={styles.team}>
                <img src={matchData.t2logo} alt="team logo" className={styles.logo} />
                <span className={styles.name}>{matchData.t2name}</span>
            </TableCell>

            <TableCell className="text-right">{matchData.name}</TableCell>
        </TableRow>
    );
}