'use client'
import GenericCard from '@/components/news-NewsCard/GenericCard'
import { NewsCardStore } from '@/store/NewsStore'
import { FC } from 'react'

const UnpackingNews: FC = ({}) => {
	const NewsCards = NewsCardStore(state => state.Cards)
	return (
		<>
			{NewsCards.map(item => (
				<GenericCard
					key={item.id}
					Date={item.Date}
					NameLogo={item.NameLogo}
					ImageSrc={item.ImageSrc}
					alt='Картинка новости'
					href={item.href}
				/>
			))}
		</>
	)
}

export default UnpackingNews
