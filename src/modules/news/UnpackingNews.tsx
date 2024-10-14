'use client'
import GenericCard from '@/components/GenericCard/GenericCard'
import { NewsCardStore } from '@/store/NewsStore'
import { FC, useEffect } from 'react'
import cl from './UnpackingNews.module.scss'
const UnpackingNews: FC = ({}) => {
	const { NewsCards, GetNewsCards } = NewsCardStore()
	// useEffect(() => {
	// 	GetNewsCards()
	// }, [])

	return (
		<div className={cl.NewsContainer}>
			{NewsCards.map(item => (
				<GenericCard
					key={item.news_id}
					published_at={item.published_at.slice(0, 10)}
					title={item.title}
					news_id={item.news_id}
					alt='Картинка новости'
				/>
			))}
		</div>
	)
}

export default UnpackingNews
