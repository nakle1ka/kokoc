import React from 'react';
import styles from './styles/photo.module.scss'
import Image from 'next/image';
import { Container } from '@/components/container/container';

type Props = {

}

export const Photo: React.FC<Props> = ({ }) => {
    return (
        <Container id={styles.container}>
            <div className={styles.content}>
                <Image
                    src="/assets/comand.jpg"
                    alt='team photo'
                    width={1920}
                    height={1080}
                    className={styles.photo}
                />

                <div className={styles.mobileBG}></div>

                <div className={styles.text}>
                    <span className={styles.title}>Кокос групп</span>
                    <p className={styles.desc}>Нечто большее, чем просто футбольный клуб</p>
                </div>
            </div>
        </Container>
    );
}