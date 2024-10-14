import React from 'react';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import { MatchTable } from '../matchTable/matchTable';

import { matchList } from '../../helpers/matchList';


type Props = {

}

export const MatchTabs: React.FC<Props> = ({ }) => {
    return (
        <Tabs defaultValue="account">
            <TabsList>
                <TabsTrigger value="account">Предстоят</TabsTrigger>
                <TabsTrigger value="password">Прошедшие</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
                <MatchTable
                    data={matchList.filter(m => m.t1Points === -1)}
                />
            </TabsContent>

            <TabsContent value="password">
                <MatchTable 
                    data={matchList.filter(m => m.t1Points !== -1)}
                />
            </TabsContent>
        </Tabs>
    );
}