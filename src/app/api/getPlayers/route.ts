import { NextRequest, NextResponse } from "next/server";

import { compoundList } from './DB'

export function GET(req: NextRequest) {
    const player_id: string = req.nextUrl.searchParams.get("player") || ""

    if(player_id) {
        return NextResponse.json(compoundList.find(p => p.player_id === player_id))
    }
    
    return NextResponse.json(compoundList)
}