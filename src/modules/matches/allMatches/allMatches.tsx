import React from 'react';

import { Container } from '@/components/container/container';
import { Title } from '@/components/title/title';

import { MatchTabs } from './components/matchTabs/matchTabs';

import styles from './styles/allMatches.module.scss'

type Props = {

}

export const AllMatches: React.FC<Props> = ({}) => {
    return ( 
        <Container>
            <Title 
                text='Все матчи'
            />

            <MatchTabs />
        </Container>
    );
}