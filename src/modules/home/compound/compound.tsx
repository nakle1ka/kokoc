'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container } from '@/components/container/container';
import { responsive } from './helpers/responsive';
import { CompoundItem } from './components/compoundItem/compoundItem';

import { TPlayer } from "@/types/playerType";

import styles from './styles/compound.module.scss';
import "./styles/customCarouselDots.css";

type Props = {

}

export const Compound: React.FC<Props> = ({}) => {
    const [compoundList, setCompoundList] = useState([] as TPlayer[])

    useEffect(() => {
        async function getPlayers() {
            const res = (await axios.get('/api/getPlayers')).data
            setCompoundList(res)
        } 

        getPlayers()
    }, [])

    return ( 
        <Container id={styles.container}>
            <h3 className={styles.title}>Игроки клуба</h3>

            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={false}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .4s"
                transitionDuration={400}
                containerClass={`carousel-container ${styles.carousel}`}
                removeArrowOnDeviceType={["mobile", "tablet"]}
                dotListClass={`custom-dot-list-style ${styles.dotList}`}
                itemClass="carousel-item-padding-40-px"
            >
                {compoundList.map(p => 
                    <CompoundItem 
                        Age={p.Age}
                        DateOfBirth={p.DateOfBirth}
                        FullName={p.FullName}
                        Goals={p.Goals}
                        MatchesPlayed={p.MatchesPlayed}
                        Photo={p.Photo}
                        key={p.FullName + p.DateOfBirth}
                    />
                )}
            </Carousel>
        </Container>
    );
}