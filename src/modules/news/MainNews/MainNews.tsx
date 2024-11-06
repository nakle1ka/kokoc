import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Tnews } from '@/types/newsType'

import cl from './styles/MainNews.module.scss'

type Props = {
	newsData: Tnews;
}

const MainNews: FC<Props> = ({ newsData }) => {
	return (
		<div className={cl.MainNews}>
			<div className={cl.MainContent}>
				<img src={newsData.media} alt='Главная Новость' className={cl.MainNewsImage} loading='lazy' />
			</div>
			<div className={cl.MainNewsTextBlock}>
				<Link href={`/news/${newsData.id}`} className={cl.MainNewsLogo}>
					{newsData.title}
				</Link>
				<div className={cl.MainNewsDescription}>
					{newsData.description}
				</div>
			</div>
		</div>
	)
}

export default MainNews
