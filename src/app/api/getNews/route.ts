import { NextRequest, NextResponse } from "next/server";

import { news } from './DB'
import { Tnews } from "@/types/newsType";

export function GET(req: NextRequest) {
    const id: string = req.nextUrl.searchParams.get("id") || ""
    const isLatest: string = req.nextUrl.searchParams.get("latest") || ""
    const filter: string = req.nextUrl.searchParams.get("filter") || "new"

    if (id) {
        return NextResponse.json(news.find(p => p.id === id))
    }

    const latestNews = news.sort((a: Tnews, b: Tnews) => {

        const dateA = new Date(a.date.split('-').reverse().join('-'));
        const dateB = new Date(b.date.split('-').reverse().join('-'));

        if (dateA > dateB) {
            return -1;
        } else if (dateA < dateB) {
            return 1;
        } else {
            return 0;
        }

    })

    if(isLatest) return NextResponse.json(latestNews[0])

    if (filter == 'new') {
        return NextResponse.json(latestNews)
    }
    else {
        return NextResponse.json(latestNews.reverse())
    }

}