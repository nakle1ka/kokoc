import React from 'react';

import { Banner } from '@/modules/matches/banner/banner';
import { AllMatches } from '@/modules/matches/allMatches/allMatches';

type Props = {

}

const Matches: React.FC<Props> = ({ }) => {
    return (
        <>
            <Banner
                date='10.11.2024 (вс)'
                matchName='21 тур'
                time='13:30'
                t1Logo='https://www.lfl.ru/photo/clubs/big-size/876_623dd0aa850ee.png'
                t1Name='Уралец'
                t2Logo='/assets/logo.png'
                t2Name='Кокос групп'
                matchHref='/matches/1'
            />

            <AllMatches

            />
        </>
    );
}

export default Matches;