import React from 'react';

import { Container } from '@/components/container/container';
import { About } from './components/about/about';
import { Form } from './components/form/form';

import styles from './styles/info.module.scss'

type Props = {

}

export const Info: React.FC<Props> = ({}) => {
    return ( 
        <Container id={styles.container}>
            <About />
            <Form />
        </Container>
    );
}