'use client'

import React from 'react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import styles from "./styles/matches.module.scss"
import Image from 'next/image';
import { MainButton } from '@/components/ui/mainButton/mainButton';

type Props = {

}

export const Matches: React.FC<Props> = ({ }) => {
    return (
        <div className={styles.container}>
            <Carousel>
                <CarouselPrevious />
                <CarouselContent>

                    <CarouselItem className="basis-1/3">
                        <div className={styles.item}>
                            <p className={styles.date}>01.01</p>
                            <p className={styles.match}>Кубок России</p>


                            <div className={styles.teams}>
                                <div className={styles.team}>
                                    <Image
                                        src="/assets/logo.png"
                                        alt='team logo'
                                        width={100}
                                        height={100}
                                        className={styles.teamlogo}
                                    />
                                    <p className={styles.teamName}>Kokoc group</p>
                                </div>

                                <span>VS</span>

                                <div className={styles.team}>
                                    <Image
                                        src="/assets/logo.png"
                                        alt='team logo'
                                        width={100}
                                        height={100}
                                        className={styles.teamlogo}
                                    />
                                    <p className={styles.teamName}>Kokoc group</p>
                                </div>
                            </div>

                            <MainButton text='Матч-центр' onClick={() => {}}/>
                        </div>
                    </CarouselItem>

                    

                </CarouselContent>
                <CarouselNext />
            </Carousel>
        </div>
    );
}