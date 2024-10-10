import React from 'react';

import { Container } from '@/components/container/container';
import { Title } from '@/components/title/title';
import { TitlesTable } from './components/titlesTable/titlesTable';

type Props = {

}

export const Titles: React.FC<Props> = ({ }) => {
    return (
        <Container>
            <Title
                text='Достижения'
            />

            <TitlesTable />
        </Container>
    );
}