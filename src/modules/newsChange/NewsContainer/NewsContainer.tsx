'use client'
import { FC, useState } from 'react'
import cl from './style/CardsContainer.module.scss'
import { NewsCardStore } from '@/store/NewsStore'
import NewsOrPlayerAdminCard from '@/components/NewsCards/NewsOrPlayerAdminCards'
import { Button } from '@/components/ui/button'
import PagintationMenu from '@/components/ui/paginationMenu'
import NewsFilter from '@/modules/NewsFilter/NewsFilter'
import ChangeContainer from '@/components/ChangeContainer/ChangeContainer'

type Props = {}

const NewsContainer: FC<Props> = ({}) => {
	const { NewsCards } = NewsCardStore()
	const [page, setPage] = useState(1)

	return (
		<ChangeContainer
			FilterCards={<NewsFilter />}
			CreateNewText='Создать новость'
		>
			{NewsCards.length == 0 && <p>Еще нет новостей</p>}
			{NewsCards && (
				<>
					{NewsCards.map(item => (
						<NewsOrPlayerAdminCard
							published_at={item.published_at.slice(0, 10)}
							key={item.news_id}
							news_id={item.news_id}
							title={item.title}
							author={item.author}
							category={item.category}
						/>
					))}
				</>
			)}

			<PagintationMenu
				allPages={4}
				page={page}
				onFetchClick={() => 1}
				className={cl.Pagination}
			/>
		</ChangeContainer>
	)
}

export default NewsContainer
