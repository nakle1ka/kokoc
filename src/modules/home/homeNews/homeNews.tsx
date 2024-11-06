'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Container } from '@/components/container/container';
import { Title } from '@/components/title/title';
import { NewCard } from './components/newCard/newCard';
import { Loader } from '@/components/loader/loader';

import styles from './styles/homeNews.module.scss'

type TRes = {
    "id": string;
    "title": string;
    "description": string;
    "category": string;
    "date": string;
    "media": string;
}

type Props = {

}

export const HomeNews: React.FC<Props> = ({ }) => {

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const [newsList, setNewsList] = useState<TRes[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)

                const res: TRes[] = (await axios.get("/api/getNews")).data

                setNewsList(res)
            } catch (err) {
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <Container id={styles.container}>
            <Title
                text='Новости'
                isRotated={true}
                isHaveButton={true}
                buttonText='Все новости'
                rotatedId={styles.title}
                btnOnClick={() => router.push('/news')}
            />

            <div className={styles.content}>
                <div className={styles.cards}>
                    {isLoading && <Loader />}

                    {!isLoading && newsList.length !== 0 &&
                        newsList.map(n =>
                            <NewCard
                                image={n.media}
                                title={n.title}
                                desc={n.description}
                                href={"/news/" + n.id}
                            />
                        )
                    }
                </div>
            </div>


        </Container>
    );
}