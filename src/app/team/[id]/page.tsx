import { FC } from 'react';
import GetPlayerStatistic from '@/modules/team[i]/GetPlayerStatistic/GetPlayerStatistic';

type Props = {
    params: {
        id: string;
    }
}

const PlayerPage: FC<Props> = ({ params }) => {
    return (
        <GetPlayerStatistic id={params.id} />
    );
}

export default PlayerPage