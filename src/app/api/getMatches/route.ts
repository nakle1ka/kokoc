// API лишь демонстративное! Все данные выдуманы 
// для наполнения контентом страницы

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { matchList } from "./DB";
import { TMatch } from "@/types/matchType";

export function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id') || ''
    const latest = req.nextUrl.searchParams.get('latest') || ''

    if (id) return NextResponse.json(matchList.find(m => m.id === id))

    if (latest) {
        const latestMatch = matchList
            .filter(m => m.t1points === -1)
            .sort((a: TMatch, b: TMatch) => {
                const dateA = new Date(a.date.split('.').reverse().join('-'));
                const dateB = new Date(b.date.split('.').reverse().join('-'));

                if (dateA > dateB) {
                    return -1;
                } else if (dateA < dateB) {
                    return 1;
                } else {
                    return 0;
                }
            })

        return NextResponse.json(latestMatch[0])
    }

    return NextResponse.json(matchList)
}