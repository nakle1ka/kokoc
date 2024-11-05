'use client'
import GenericCard from '@/components/GenericCard/GenericCard'

import { FC } from 'react'
import { Tnews } from '@/types/newsType'

import cl from './UnpackingNews.module.scss'

type Props = {
	NewsCards: Tnews[]
}

const UnpackingNews: FC<Props> = ({ NewsCards }) => {
	return (
		<div className={cl.NewsContainer}>
			{NewsCards.map(item => (
				<GenericCard
					news_id={item.id}
					title={item.title}
					published_at={item.date}
					photo={item.media}
					alt='новости'
				/>
			))}
		</div>
	)
}

export default UnpackingNews
