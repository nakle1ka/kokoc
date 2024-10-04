import cl from './styles/page.module.scss'
import { FC } from 'react'
import MainNews from '@/modules/news/MainNews/MainNews'
import NewsFilter from '@/modules/news/NewsFilter/NewsFilter'
import Unpacking from '@/modules/news/Unpacking'


const News: FC = ({}) => {
	return (
		<div className={cl.pageContainer}>
		
			<div className={cl.CenterContainer}>
				<MainNews />
				<h1 className={cl.NewsLogo}>
					<span>Kokoc</span>Новости
				</h1>
				<NewsFilter />
				<div className={cl.NewsContainer}>
					<Unpacking/>
				</div>
			</div>
		</div>
	)
}

export default News
