import React from 'react';

import { MatchBtn } from './components/matchBtn/matchBtn';
import banner from '@/../public/assets/banner.png'

import { BGimgs } from './helpers/bgImgs'
import { randomItem } from './helpers/randomItem';

import { TMatch } from '@/types/matchType';

import styles from './styles/banner.module.scss'
import Image from 'next/image';

type Props = {
    matchData: TMatch;
    isItem?: boolean;
}

export const Banner: React.FC<Props> = ({
    matchData, isItem = false
}) => {

    let currentImage;

    if (isItem) currentImage = randomItem(BGimgs)

    return (
        <div className={styles.container}>

            <span className={`${styles.bgContainer} ${isItem && styles.bgitem}`}>
                <Image
                    src={currentImage || banner}
                    alt='background'
                    className={styles.bg}
                    width={1920}
                    height={1080}
                />
            </span>

            <div className={styles.content}>

                <div className={styles.info}>
                    <h3 className={styles.date}>{matchData.date}</h3>
                    <span className={styles.time}>{matchData.city}, {matchData.time}</span>
                </div>


                <div className={styles.teams}>
                    <div className={styles.team}>
                        <img
                            src={matchData.t1logo}
                            alt={`${matchData.t1name} logo`}
                            loading='lazy'
                            className={styles.teamLogo}
                        />
                        <span className={styles.teamName}>{matchData.t1name}</span>
                    </div>

                    <span className={styles.vs}>VS</span>

                    <div className={styles.team}>
                        <img
                            src={matchData.t2logo}
                            alt={`${matchData.t2name} logo`}
                            loading='lazy'
                            className={styles.teamLogo}
                        />
                        <span className={styles.teamName}>{matchData.t2name}</span>
                    </div>
                </div>

                <span className={styles.matchName}>{matchData.name}</span>

                {
                    !isItem && (
                        <MatchBtn
                            href={`/matches/${matchData.id}`}
                        />
                    )
                }

            </div>
        </div>
    );
}