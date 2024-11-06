import React from 'react';

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { MatchTableItem } from "./../matchTableItem/matchTableItem"
import { TMatch } from '@/types/matchType';

type Props = {
    data: TMatch[];
}

export const MatchTable: React.FC<Props> = ({ data }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Дата</TableHead>
                    <TableHead>Команда</TableHead>
                    <TableHead>Счёт</TableHead>
                    <TableHead>Команда</TableHead>
                    <TableHead className="text-right">Матч</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {data.map(m => (
                    <MatchTableItem
                        matchData={m}
                    />
                ))}
            </TableBody>
        </Table>

    );
}