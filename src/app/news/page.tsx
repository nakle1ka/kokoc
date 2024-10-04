import NewsCard from '@/components/news-NewsCard/NewsCard'
import cl from './styles/page.module.scss'
import { FC } from 'react'
import MainNews from '@/modules/news/MainNews/MainNews'
import KokocLogo from '@/images/KokocLogo.png'
import Image from 'next/image'
import NewsFilter from '@/modules/news/NewsFilter/NewsFilter'
type Props = {}

const News: FC<Props> = ({}) => {
	return (
		<div className={cl.pageContainer}>
			<Image src={KokocLogo} alt='' className={cl.ImageDecor} />
			<div className={cl.CenterContainer}>
				<MainNews />

				<h1 className={cl.NewsLogo}>
					<span>Kokoc</span>Новости
				</h1>
				<NewsFilter />

				<div className={cl.NewsContainer}>
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</div>
			</div>
		</div>
	)
}

export default News
