import { Banner } from '@/modules/shared/banner/banner';
import axios from 'axios';
import React from 'react';

type Props = {
    params: {
        id: string;
    }
}

const MatchId: React.FC<Props> = async ({ params }) => {
    const match = await (await axios.get(`http://localhost:3000/api/getMatches?id=${params.id}`)).data

    return (
        <Banner
            matchData={match}
            isItem={true}
        />
    );
}

export default MatchId