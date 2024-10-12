import {FC} from 'react';
import cl from './style/page.module.scss'
import GetPlayerStatistic from '@/modules/team[i]/GetPlayerStatistic/GetPlayerStatistic';

type Props = {

}

const PlayerPage : FC<Props> = ({}) => {
    return ( 
        <div>
            <GetPlayerStatistic/>
        </div>
    );
}

export default PlayerPage