import React from 'react';
import { LoaderCircle } from 'lucide-react';
import styles from './loader.module.scss'

type Props = {

}

export const Loader: React.FC<Props> = ({}) => {
    return ( 
        <div className={styles.loader}>
            <LoaderCircle 
                className={styles.spinner}
            />
        </div>
    );
}