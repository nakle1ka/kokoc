import {FC} from 'react';
import cl from './style/changeNews.module.scss'
import Logotype from '@/components/ui/logotype/logotype'



const ChangeNews: FC = ({}) => {
    return ( 
        <div className={cl.Page}>
            <Logotype FirstWord='Модерирование' SecondWord='Новостей'/>
        </div>
    );
}

export default ChangeNews