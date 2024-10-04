'use client'
import NewsCard from '@/components/news-NewsCard/NewsCard'
import { NewsCardStore } from '@/stores/NewsCards'
import { FC } from 'react'

const Unpacking: FC = ({}) => {
	const NewsCards = NewsCardStore(state => state.Cards)
	return (
		<>
			{NewsCards.map(item => (
				<NewsCard
                    key={item.id}
					Date={item.Date}
					NewsLogo={item.NewsLogo}
					ImageSrc={item.ImageSrc}
                    id={item.id}
					href={item.href}
				/>
			))}
		</>
	)
}

export default Unpacking
