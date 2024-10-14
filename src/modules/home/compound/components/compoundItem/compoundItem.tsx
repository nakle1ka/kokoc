import React from 'react';
import Image from 'next/image';
import { TPlayer } from '../../types';
import styles from './compoundItem.module.scss'

export const CompoundItem: React.FC<TPlayer> = ({
    Age, DateOfBirth, FullName, Goals, MatchesPlayed, Photo,
}) => {
    return (
        <div className={styles.container} >
            <div className={styles.general}>
                <Image
                    src={Photo}
                    alt='фото игрока'
                    width={100}
                    height={100}
                    className={styles.photo}
                />

                <p className={styles.fullName}>{FullName}</p>
            </div>

            <div className={styles.infoContainer}>
                <div>
                    <p className={styles.info}>
                        Возраст: <span className={styles.value}>{Age}</span>
                    </p>
                </div>

                <div>
                    <p className={styles.info}>
                        Дата рождения: <span className={styles.value}>{DateOfBirth}</span>
                    </p>
                </div>

                <div>
                    <p className={styles.info}>
                        Сыграно матчей: <span className={styles.value}>{MatchesPlayed}</span>
                    </p>
                </div>

                <div>
                    <p className={styles.info}>
                        Всего голов: <span className={styles.value}>{Goals}</span>
                    </p>
                </div>
            </div>

        </div>
    );
}