import {FC} from 'react';
import cl from './style/page.module.scss'
import PlayerRequestStatistic from '@/modules/RedactPlayer/PlayerRequestStatistic/PlayerRequestStatistic';


const RedactPlayer: FC = ({}) => {
    return ( 
        <div className={cl.Page}>
            <PlayerRequestStatistic/>
            
        </div>
    );
}

export default RedactPlayer