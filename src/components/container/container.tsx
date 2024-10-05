import React from 'react';
import styles from './container.module.scss'

type Props = {
    id?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ children, id = "" }) => {
    return (
        <section className={styles.container} id={id} >
            {children}
        </section>
    );
}