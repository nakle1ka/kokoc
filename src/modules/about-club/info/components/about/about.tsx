import React from 'react';
import { Title } from '@/components/title/title';
import styles from './about.module.scss'

type Props = {

}

export const About: React.FC<Props> = ({ }) => {
    return (
        <div className={styles.container} >
            <Title 
                text='О клубе'
            />
            <p className={styles.text}>
                «Кокос групп» — один из футбольных клубов российского спорта, основанный в 2011 году.
                 Клуб уже завоёвывал чемпионский титул в соревнованиях
                 «Первый дивизион ЮЗЛ-2022», «Лига Чемпионов-2024».
                 Но наш клуб не всегда носил такое название, 
                 до 2021 он назывался «Вершина», 
                 в то же время поменялся и логотип клуба.
            </p>
        </div>
    );
}