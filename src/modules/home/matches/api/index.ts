import axios from "axios"
import { TMatchItem, TServerResponse } from "../types"

export const fetchMatches = async (skip: number = 0, limit: number = 10): Promise<TServerResponse> => {
    const res: TServerResponse = (await (axios.get(`https://34.0.251.246/matches?skip=${skip}&limit=${limit}`))).data

    return res
}