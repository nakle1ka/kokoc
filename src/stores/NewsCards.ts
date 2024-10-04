import { NewsCardType } from '@/types/NewsCardType'
import { create } from 'zustand'

type NewsCardStoreType = {
	Cards: NewsCardType[]
}

const NewsCardStore = create<NewsCardStoreType>(set => ({
	Cards: [
		{
			NewsLogo: 'Amazing Goal hype hype very cool',
			Date: '30.04.2024',
			ImageSrc: '',
			id: 1,
			href: '/app',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 2,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 3,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},

		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},
		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},

		{
			NewsLogo: ' Goal hype hype very cool',
			Date: '30.04.2023',
			ImageSrc: '',
			id: 4,
			href: '/team',
		},
		

	],
}))

export { NewsCardStore }
