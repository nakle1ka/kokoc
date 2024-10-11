import { PlayerCardType } from "@/types/NewsorPlayerCardType";
import { create } from "zustand";

type PlayersStoreType = {
    Players: PlayerCardType[]
}

const PlayersStore = create<PlayersStoreType>(set => ({
	Players: [
		{
			role: 'Нападающий',
			NumberInClub: 123,
			player_id: '235ыва123ыва',
			FullName: 'Аветисян Эдгарович',
			Weight: 60,
			Height: 120,
			DateOfBirth: '2024-03-04',
			Biography: 'ывввпыв пывпывпывп',
		},
		{
			role: 'Нападающий',
			NumberInClub: 123,
			player_id: 'ыва123ыв235а',
			FullName: 'Аветисян Эдгарович',
			Weight: 60,
			Height: 120,
			DateOfBirth: '2024-03-04',
			Biography: 'ывввпыв пывпывпывп',
		},
		
		{
			role: 'Нападающий',
			NumberInClub: 123,
			player_id: 'ыва13423ыва',
			FullName: 'Аветисян Эдгарович',
			Weight: 60,
			Height: 120,
			DateOfBirth: '2024-03-04',
			Biography: 'ывввпыв пывпывпывп',
		},
	],
}))

export {PlayersStore}

