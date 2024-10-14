import React from 'react';
import { Title } from '@/components/title/title';
import styles from './form.module.scss'

type Props = {

}

export const Form: React.FC<Props> = ({ }) => {
    return (
        <div className={styles.container} >
            <Title text='Форма' />

            <div className={styles.forms}>
                <img
                    src="https://www.lfl.ru/photo/clubs/shirts/shirt150_1_232_65f7e8881d4c7.png"
                    alt="футбольная форма"
                />
                <img
                    src="https://www.lfl.ru/photo/clubs/shirts/shirt150_2_232_65f7e8881f1a4.png"
                    alt="футбольная форма"
                />
                <img
                    src="https://www.lfl.ru/photo/clubs/shirts/shirt_winter1_232_63f5ea8dd1cff.png"
                    alt="футбольная форма"
                />
            </div>
        </div>
    );
}