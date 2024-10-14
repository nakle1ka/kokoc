'use client'

// import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container } from "@/components/container/container";
import { Title } from "@/components/title/title";
import { MatchItem } from "./components/matchItem/matchItem";
import { Loader } from "@/components/loader/loader";

// import { fetchMatches } from "./api";
import { responsive } from "./helpers/responsive";
// import { TMatchItem } from "./types";
import { matchListTest } from "./helpers/matchList";

import styles from "./styles/matches.module.scss"

export function Matches() {
    // Наш бекендер не успел сделать сервер(

    const router = useRouter()

    // const [isLoading, setIsLoading] = useState(false)
    // const [matchList, setMatchList] = useState<TMatchItem[]>([])

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             setIsLoading(true)

    //             const res = await fetchMatches(0, 8)
    //             console.log(res)

    //             setMatchList(res.matches)
    //         } catch (err) {
    //             console.error(err)
    //         } finally {
    //             setIsLoading(false)
    //         }
    //     }

    //     fetchData()
    // }, [])

    return (
        <Container>
            <Title
                text="Матчи"
                isHaveButton={true}
                buttonText="Все матчи"
                btnOnClick={() => router.push('/matches')}
            />

            {/* {isLoading && <Loader />} */}

            {/* {!isLoading && */}
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={false}
                    infinite={false}
                    autoPlay={false}
                    keyBoardControl={true}
                    customTransition="all .4s"
                    transitionDuration={400}
                    containerClass={`carousel-container ${styles.container}`}
                    removeArrowOnDeviceType={["mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >

                    {matchListTest.map(m =>
                        <MatchItem
                            href={m.id || 1}
                            date={m.date}
                            name={m.name}

                            team1Logo={m.t1logo}
                            team1Name={m.t1name}
                            team1Points={m.t1points}

                            team2Logo={m.t2logo}
                            team2Name={m.t2name}
                            team2Points={m.t2points}

                            key={m.name + m.date}
                        />
                    )}
                </Carousel>
            {/* } */}

        </Container>
    )
}
