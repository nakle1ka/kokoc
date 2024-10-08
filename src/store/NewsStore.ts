import { NewsCardType } from '@/types/NewsCardType'
import { create } from 'zustand'

type NewsCardStoreType = {
	Cards: NewsCardType[]
}

const NewsCardStore = create<NewsCardStoreType>(set => ({
	Cards: [
		{
			NameLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4568,
			href: '/team',
		},
		{
			NameLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 423,
			href: '/team',
		},
		{
			NameLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4967,
			href: '/team',
		},
		{
			NameLogo: ' Goal hype hype very cool nsadn jnasfnasn isanfin asnfinasjfn asnfnaisfnin asnfj',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4346,
			href: '/team',
		},
		{
			NameLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4567,
			href: '/team',
		},
		{
			NameLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 40,
			href: '/team',
		},

		{
			NameLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 471,
			href: '/team',
		},
		{
			NameLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 43461,
			href: '/team',
		},
	],
}))
export {NewsCardStore}