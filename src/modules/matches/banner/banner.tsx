import React from 'react';

import { MatchBtn } from './components/matchBtn/matchBtn';

import { Container } from '@/components/container/container';

import styles from './styles/banner.module.scss'

type Props = {
    date: string;
    time: string;

    t1Logo: string;
    t1Name: string;

    t2Logo: string;
    t2Name: string;

    matchName: string;

    matchHref: string;
}

export const Banner: React.FC<Props> = ({
    date, matchName, t1Logo, t1Name, t2Logo, t2Name, time, matchHref
}) => {
    return (
        <Container id={styles.container} >
            <div className={styles.content}>

                <div className={styles.info}>
                    <h3 className={styles.date}>{date}</h3>
                    <span className={styles.time}>{time}</span>
                </div>


                <div className={styles.teams}>
                    <div className={styles.team}>
                        <img
                            src={t1Logo}
                            alt={`${t1Name} logo`}
                            loading='lazy'
                            className={styles.teamLogo}
                        />
                        <span className={styles.teamName}>{t1Name}</span>
                    </div>

                    <span className={styles.vs}>VS</span>

                    <div className={styles.team}>
                        <img
                            src={t2Logo}
                            alt={`${t2Name} logo`}
                            loading='lazy'
                            className={styles.teamLogo}
                        />
                        <span className={styles.teamName}>{t2Name}</span>
                    </div>
                </div>

                <span className={styles.matchName}>{matchName}</span>

                <MatchBtn
                    href={matchHref}
                />
            </div>
        </Container>
    );
}