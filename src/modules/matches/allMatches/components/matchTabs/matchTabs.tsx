import React from 'react';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import { MatchTable } from '../matchTable/matchTable';

import { TMatch } from '@/types/matchType';

type Props = {
    matches: TMatch[];
}

export const MatchTabs: React.FC<Props> = ({ matches }) => {

    return (
        <Tabs defaultValue="account">
            <TabsList>
                <TabsTrigger value="account">Предстоят</TabsTrigger>
                <TabsTrigger value="password">Прошедшие</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
                <MatchTable
                    data={matches.filter(m => m.t1points === -1)}
                />
            </TabsContent>

            <TabsContent value="password">
                <MatchTable 
                    data={matches.filter(m => m.t1points !== -1)}
                />
            </TabsContent>
        </Tabs>
    );
}