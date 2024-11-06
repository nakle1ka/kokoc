import React from 'react';

import { Container } from '@/components/container/container';
import { Title } from '@/components/title/title';

import { MatchTabs } from './components/matchTabs/matchTabs';
import { TMatch } from '@/types/matchType';

type Props = {
    matches: TMatch[];
}

export const AllMatches: React.FC<Props> = ({ matches }) => {
    return ( 
        <Container>
            <Title 
                text='Все матчи'
            />

            <MatchTabs matches={matches} />
        </Container>
    );
}