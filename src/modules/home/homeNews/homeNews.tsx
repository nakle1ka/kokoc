import React from 'react';
import { Container } from '@/components/container/container';

import { Title } from '@/components/title/title';
import { NewCard } from './components/newCard/newCard';

import styles from './styles/homeNews.module.scss'

type Props = {

}

export const HomeNews: React.FC<Props> = ({ }) => {
    return (
        <Container id={styles.container}>
            <Title
                text='Новости'
                isRotated={true}
                isHaveButton={true}
                buttonText='Все новости'
                rotatedId={styles.title}
            />

            <div className={styles.content}>
                <div className={styles.cards}>
                    <NewCard
                        image='/assets/comand.jpg'
                        title='Афигеть новость'
                        desc='я в шоке dfjskadgsdkjvngsdkjfghsadkfhjasdlkjfhbsdkfjsdfjasdfgsadjhfgsdajhfgsadkjfhgsafhjgsadkfjhgsadfdashjddSdasdashjdgasjkhdgaskjdgakjdgasdjkhfhsdkjfsdkjfhsdkjfhsjdhfskdjfhsdkjfhsdkjfhsdkjfhskdjfhshdfkjsdhfkjsd '
                        href='/news/1'
                    />
                    <NewCard
                        image='/assets/comand.jpg'
                        title='Афигеть новость'
                        desc='я в шоке'
                        href='/news/1'
                    />
                    <NewCard
                        image='/assets/comand.jpg'
                        title='Афигеть новость'
                        desc='я в шоке'
                        href='/news/1'
                    />
                    <NewCard
                        image='/assets/comand.jpg'
                        title='Афигеть новость'
                        desc='я в шоке'
                        href='/news/1'
                    />
                    <NewCard
                        image='/assets/comand.jpg'
                        title='Афигеть новость'
                        desc='я в шоке'
                        href='/news/1'
                    />
                    <NewCard
                        image='/assets/comand.jpg'
                        title='Афигеть новость'
                        desc='я в шоке'
                        href='/news/1'
                    />
                </div>
            </div>


        </Container>
    );
}