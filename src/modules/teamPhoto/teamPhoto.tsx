import React from 'react';
import Image from 'next/image';

import teamPhoto from "@/../public/assets/comand.jpg"

import styles from './teamPhoto.module.scss'

type Props = {

}

export const TeamPhoto: React.FC<Props> = ({}) => {
    return ( 
        <Image 
            src={teamPhoto}
            alt='team photo'
            loading='eager'
        />
    );
}