import cl from './styles/page.module.scss'
import { FC } from 'react'
import MainNews from '@/modules/news/MainNews/MainNews'
import NewsFilter from '@/modules/news/NewsFilter/NewsFilter'
import Logotype from '@/components/ui/logotype/logotype'
import UnpackingNews from '@/modules/news/UnpackingNews'


const News: FC = ({}) => {
	return (
		<div className={cl.pageContainer}>
			<div className={cl.CenterContainer}>
				<MainNews />
				<Logotype FirstWord='Kokoc' SecondWord='Новости' />
				<NewsFilter />
				<div className={cl.NewsContainer}>
					<UnpackingNews />
				</div>
			</div>
		</div>
	)
}

export default News
