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
			title: 'Папич вернулся в Винницу',
			content: 'Итоги матча Суперлиги против «Чертаново» подвели главный тренер ЖФК \n«Локомотив» Елена Фомина и автор единственного гола в этой вст\nрече Алсу Абдуллина.Елена Фомина:— Каждая игра для нас сложная, не только после финала Кубка. Мы боремся за призы, команда это понимает, у каждого игрока есть зона ответственности.Сегодня мы забили быстрый гол, и, наверное, появилось ощущение, что сможем победить с крупным счётом. Слабая реализация голевых моментов привела к тому, что концовка была очень напряжённой. Возможно, второй тайм действительно был за «Чертаново», соперник неплохо \nконтролировал мяч, действовал опасно. Если бы мы забили всё, что могли, думаю, проблем бы не возникло. Но в итоге получилась очень нервная игра.098A1617.JPGАлсу Абдуллина:— Это был непростой матч. Хорошо, что заработали три очка в копилочку. С «Чертаново» всегда играть непросто. Команда молодая, перспективная, показывает хороший футбол. Мой гол? Лаисса вроде прострелила, Вика (Козлова. — Прим.) оставила мяч, а я пробила. Как отрабатывали на тренировках, т\nак и получилось.Пресс-служба ЖФК «Локомотив»12 октября 2024 2\n1:00',
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
			title: 'Бетмн победил Супермена',
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
			title: 'Мы признали независимость Польши',
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
			title: 'Гоол Дмитрий Нагиев спонсирует теперь нас!',
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
		set(prev=>({...prev,NewsCards:data.data}))
	},
}))
export { NewsCardStore }
