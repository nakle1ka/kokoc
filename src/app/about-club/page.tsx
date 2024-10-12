import React from 'react';
import { Photo } from '@/modules/about-club/photo/photo';
import { Info } from '@/modules/about-club/info/info';

type Props = {

}

const About: React.FC<Props> = ({ }) => {
    return (
        <>
            <Photo />
            <Info />
        </>
    );
}

export default About