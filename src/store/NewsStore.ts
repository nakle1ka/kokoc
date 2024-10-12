import { NewsCardType } from '@/types/NewsOrPlayerCardType'
import { create } from 'zustand'
import axios from 'axios';
type NewsCardStoreType = {
	NewsCards: NewsCardType[]
	GetNewsCards: () => Promise<void>
}

const NewsCardStore = create<NewsCardStoreType>(set => ({
	NewsCards: [
		{
			news_id: '3fa85f64-5717-4562-b3fc-2c963f66a5fa6',
			title: 'afss saf asf string',
			content: 'string',
			category: 'masfm psfkpaskfpo',
			published_at: '2024-10-11T16:11:14.524Z',
			author: 'Петровисян Анатольевевевич',
			media: [],
			reactions: [],
			comments: [],
			tags: [],
		},
		{
			news_id: '3f3a85f64-5717-4562-b3fc-2c963f66afa6',
			title: 'Тимофей Якутович забил свой самый первый гоооол',
			content: 'string',
			category: 'string',
			published_at: '2024-10-11T16:11:14.524Z',
			author: 'string',
			media: [],
			reactions: [],
			comments: [],
			tags: [],
		},
		
		{
			news_id: '3fa85f6415-5717-4562-b3fc-2c963f66afa6',
			title: 'afss saf asf string',
			content: 'string',
			category: 'string',
			published_at: '2024-10-11T16:11:14.524Z',
			author: 'string',
			media: [],
			reactions: [],
			comments: [],
			tags: [],
		},
		
		{
			news_id: '3fa85f364-5717-4562-b3fc-2c963f66afa6',
			title: 'afss saf asf string',
			content: 'string',
			category: 'string',
			published_at: '2024-10-11T16:11:14.524Z',
			author: 'string',
			media: [],
			reactions: [],
			comments: [],
			tags: [],
		},
		
		{
			news_id: '3fa852f64-5717-4562-b3fc-2c963f66afa6',
			title: 'afss saf asf string',
			content: 'string',
			category: 'string',
			published_at: '2024-10-11T16:11:14.524Z',
			author: 'string',
			media: [],
			reactions: [],
			comments: [],
			tags: [],
		},
	],
	GetNewsCards: async () => {
		const data = await axios.get('https://34.0.251.246/news/?limit=20&offset=0')
	},
}))
export { NewsCardStore }
