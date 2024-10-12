import React from 'react';

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {MatchTableItem} from "./../matchTableItem/matchTableItem"

type TMatchItemProps = {
    date: string;
    t1Logo: string;
    t1Name: string;
    t1Points: number;

    t2Logo: string;
    t2Name: string;
    t2Points: number;

    name: string;
}

type Props = {
    data: TMatchItemProps[];
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
                        date={m.date}
                        name={m.name}
                        t1Logo={m.t1Logo}
                        t1Name={m.t1Name}
                        t1Points={m.t1Points}
                        t2Logo={m.t2Logo}
                        t2Name={m.t2Name}
                        t2Points={m.t2Points}
                    />
                ))}
            </TableBody>
        </Table>

    );
}