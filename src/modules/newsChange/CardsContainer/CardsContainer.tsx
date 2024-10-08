'use client'
import { FC, useState } from 'react'
import cl from './style/CardsContainer.module.scss'
import { NewsCardStore } from '@/store/NewsStore'
import NewsCard from '@/components/NewsCards/NewsCards'
import { Button } from '@/components/ui/button'
import PagintationMenu from '@/components/ui/paginationMenu'

type Props = {}

const NewsContainer: FC<Props> = ({}) => {
	const { Cards } = NewsCardStore()
	const [page, setPage] = useState(1)
	return (
		<div className={cl.Container}>
			<div className={cl.CardsContainer}>
				<header className={cl.CreateNew}>
					<Button className={cl.CreateButton}>Создать новость</Button>
				</header>
				{Cards.map(item => (
					<NewsCard
						Date={item.Date}
						key={item.id}
						id={item.id}
						NameLogo={item.NameLogo}
						href={item.href}
						
					/>
				))}
				<PagintationMenu
					allPages={4}
					page={page}
					onFetchClick={() => 1}
					className={cl.Pagination}
				/>
			</div>
		</div>
	)
}

export default NewsContainer
