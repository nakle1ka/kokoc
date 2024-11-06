export type TTeam1 = {
    t1logo: string;
    t1name: string;
    t1points: number;
}
export type TTeam2 = {
    t2logo: string;
    t2name: string;
    t2points: number;
}

export type TMatch = {
    id: string;
    time: string;
    date: string;
    city?: string;
    name: string;
} & TTeam1 & TTeam2

export type TServerResponse = {
    matches: TMatch[];
    total: number;
}