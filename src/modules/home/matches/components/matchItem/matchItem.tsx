import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { MainButton } from '@/components/ui/mainButton/mainButton';

import styles from './matchItem.module.scss'
import { MatchButton } from '../matchButton/matchButton';

type Props = {
    date: string;
    name: string;
    href: number;

    team1Logo: string;
    team1Name: string;
    team1Points: number;

    team2Logo: string;
    team2Name: string;
    team2Points: number;
}

export const MatchItem: React.FC<Props> = ({
    date, name, href,
    team1Logo, team1Name, team1Points,
    team2Logo, team2Name, team2Points
}) => {
    return (
        <Card id={styles.card}>
            <CardHeader className='flex items-center'>
                <CardTitle>{date}</CardTitle>
                <CardDescription>{name}</CardDescription>
            </CardHeader>

            <CardContent>
                <div className={styles.teams}>
                    <div className={styles.team}>

                        {/* 
                            * Через image плохо работает вставка через ссылки
                            * поэтому использовал обычный img 
                        */}

                        {/* <Image
                            src={team1Logo}
                            alt='team logo'
                            width={100}
                            height={100}
                        /> */}
                        <img
                            src={team1Logo}
                            alt='team logo'
                            loading='lazy'
                            className={styles.teamLogo}
                        />
                        <p>{team1Name}</p>
                    </div>

                    <span>VS</span>

                    <div className={styles.team}>
                        <img
                            src={team2Logo}
                            alt='team logo'
                            loading='lazy'
                            className={styles.teamLogo}
                        />
                        <p>{team2Name}</p>
                    </div>
                </div>

                <CardTitle id={styles.points}>
                    {
                        team1Points === -1 || team2Points === -1
                            ? "Предстоит"
                            : team1Points + " : " + team2Points
                    }
                </CardTitle>
            </CardContent>

            <CardFooter className='flex justify-center'>
                <MatchButton href={href} />
            </CardFooter>

        </Card>
    );
}