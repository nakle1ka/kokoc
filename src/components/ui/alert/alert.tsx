import {FC, PropsWithChildren} from 'react';
import cl from './style/alert.module.scss'


 
const Alert: FC<PropsWithChildren> = ({children}) => {
    return ( 
        <div className={cl.Alert}>{children}</div>
    );
}

export default Alert