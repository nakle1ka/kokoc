import React from 'react';

import { Button } from '../ui/button';
import { Container } from '../container/container';
import { MainButton } from '../ui/mainButton/mainButton';

import styles from './title.module.scss'

type Props = {
    text: string;
    isHaveButton?: boolean;
    buttonText?: string;
    btnOnClick?: () => void;
    isRotated?: boolean;
    rotatedId?: string;
}

export const Title: React.FC<Props> = ({
    text,
    buttonText = "",
    isHaveButton = false,
    btnOnClick,
    isRotated = false,
    rotatedId = ""
}) => {
    return (
        <>
            {!isRotated && (

                <div id={styles.container}>
                    <h2 className={styles.title}>{text}</h2>
                    {isHaveButton && <Button onClick={btnOnClick}>{buttonText}</Button>}
                </div>
            )}

            {isRotated && (

                <div className={styles.rotatedContainer} id={rotatedId}>
                    <div className={styles.text}>
                        <span className={styles.kokoc}>Kokoc</span>
                        <h2 className={styles.title}>{text}</h2>
                    </div>
                    {isHaveButton && <MainButton text={buttonText} onClick={btnOnClick} />}
                </div>

            )}
        </>
    );
}