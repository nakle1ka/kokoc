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
    "news_id": string
    "title": string
    "content": string
    "category": string
    "published_at": string
    "author": string
    "media": any[]
    "reactions": any[]
    "comments": any[]
    "tags": any[] // не успеваем :(
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

                const res: TRes[] = (await axios.get("https://34.0.251.246/news?limit=10&offset=1")).data
                console.log(res)

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
            />

            <div className={styles.content}>
                <div className={styles.cards}>
                    {isLoading && <Loader />}

                    {!isLoading && newsList.length !== 0 &&
                        newsList.map(n =>
                            <NewCard
                                image={n.media[0]}
                                title={n.title}
                                desc={n.content}
                                href={"/news/" + n.news_id}
                            />
                        )
                    }

                    {!isLoading && newsList.length == 0 &&
                        <>
                            <NewCard
                                image='/assets/comand.jpg'
                                title='Новостей ещё нет'
                                desc='но вы можете их добавить через админ панель'
                                href='/news/test'
                            />
                        </>
                    }

                </div>
            </div>


        </Container>
    );
}