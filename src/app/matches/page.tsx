import React from 'react';
import axios from 'axios';

import { Banner } from '@/modules/shared/banner/banner';
import { AllMatches } from '@/modules/matches/allMatches/allMatches';
import { TMatch } from '@/types/matchType';

type Props = {

}

const Matches: React.FC<Props> = async ({ }) => {

    const matches: TMatch[] = await (await axios.get('http://localhost:3000/api/getMatches')).data
    const latestMatch: TMatch = await (await axios.get('http://localhost:3000/api/getMatches?latest=true')).data

    return (
        <>
            <Banner
                matchData={latestMatch}
            />

            <AllMatches matches={matches} />
        </>
    );
}

export default Matches;