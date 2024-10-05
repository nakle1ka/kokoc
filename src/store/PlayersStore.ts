import { PlayerCardType } from "@/types/NewsCardType";
import { create } from "zustand";

type PlayersStoreType = {
    Players: PlayerCardType[]
}

const PlayersStore = create<PlayersStoreType>(set => ({
	Players: [
		{
			NumberPlayer: 22,
			id: 523321,
			NameLogo: 'Александров Магамедович',
			role: 'Нападающий',
			href: '/app',
			ImageSrc: '',
		},
		{
			NumberPlayer: 22,
			id: 124214121,
			NameLogo: 'Boris Balls',
			role: 'Нападающий',
			href: '/app',
			ImageSrc: '',
		},
		{
			NumberPlayer: 22,
			id: 1241241,
			NameLogo: 'Boris Balls',
			role: 'Нападающий',
			href: '/app',
			ImageSrc: '',
		},
		{
			NumberPlayer: 22,
			id: 11234,
			NameLogo: 'Boris Balls',
			role: 'Нападающий',
			href: '/app',
			ImageSrc: '',
		},
		{
			NumberPlayer: 23,
			id: 132,
			NameLogo: 'Borisп2 Balls',
			role: 'Нападающий',
			href: '/app',
			ImageSrc: '',
		},
		{
			NumberPlayer: 242,
			id: 1255,
			NameLogo: 'Bori1а2s Balls',
			role: 'Нападающий',
			href: '/app',
			ImageSrc: '',
		},
		{
			NumberPlayer: 2742,
			id: 1325235,
			NameLogo: 'Boris а21Balls',
			role: 'Вратарь',
			href: '/app',
			ImageSrc: '',
		},
		{
			NumberPlayer: 2742,
			id: 1346346,
			NameLogo: 'Bor12ваis Balls',
			role: 'Вратарь',
			href: '/app',
			ImageSrc: '',
		},
		{
			NumberPlayer: 242,
			id: 41,
			NameLogo: 'Bo214ris Balls',
			role: 'Защитник',
			href: '/app',
			ImageSrc: '',
		},
		{
			NumberPlayer: 242,
			id: 71,
			NameLogo: 'Borфыаis Balls',
			role: 'Полузащитник',
			href: '/app',
			ImageSrc: '',
		},
		{
			NumberPlayer: 292,
			id: 111,
			NameLogo: 'Borisыфа Balls',
			role: 'Защитник',
			href: '/app',
			ImageSrc: '',
		},
		{
			NumberPlayer: 272,
			id: 910,
			NameLogo: 'Borыфаis Balls',
			role: 'Ушли',
			href: '/app',
			ImageSrc: '',
		},
	],
}))

export {PlayersStore}

