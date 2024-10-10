'use client'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/navigation";

import { Container } from "@/components/container/container";
import { Title } from "@/components/title/title";
import { MatchItem } from "./components/matchItem/matchItem";

import { responsive } from "./helpers/responsive";
import { matchList } from "./helpers/matchList";

import styles from "./styles/matches.module.scss"

export function Matches() {
    const router = useRouter()

    return (
        <Container>
            <Title
                text="Матчи"
                isHaveButton={true}
                buttonText="Все матчи"
                btnOnClick={() => router.push('/matches')}
            />

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

                {matchList.map(m =>
                    <MatchItem
                        date={m.date}
                        name={m.name}

                        team1Logo={m.t1logo}
                        team1Name={m.t1name}
                        team1Points={m.t1points}

                        team2Logo={m.t2logo}
                        team2Name={m.t2name}
                        team2Points={m.t2points}
                    />
                )}

            </Carousel>
        </Container>
    )
}
