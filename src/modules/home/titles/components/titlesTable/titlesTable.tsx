import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Trophy } from "lucide-react";

import { titlesList } from "../../helpers/titlesList";

import styles from "./titlesTable.module.scss"

type Props = {

}

export const TitlesTable: React.FC<Props> = ({ }) => {
    return (
        <Table>
            <TableCaption>И это ещё не всё! Нас ожидают большие успехи!</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Название</TableHead>
                    <TableHead>Место</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {titlesList.map(t => (
                    <TableRow>
                        <TableCell className="font-medium">{t.name}</TableCell>
                        <TableCell>{t.place}</TableCell>
                        <TableCell className="text-right">
                            <Trophy className={styles[`place${t.place}`]} />
                        </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>
    );
}