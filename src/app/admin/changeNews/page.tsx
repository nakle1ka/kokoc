import { FC } from 'react'
import cl from './style/changeNews.module.scss'
import Logotype from '@/components/ui/logotype/logotype'
import NewsFilter from '@/modules/NewsFilter/NewsFilter'
import NewsContainer from '@/modules/newsChange/CardsContainer/CardsContainer'

const ChangeNews: FC = ({}) => {
	return (
		<div className={cl.Page}>
			<div className={cl.UpperContainer}>
				<Logotype FirstWord='Модерирование' SecondWord='Новостей' />
				<NewsFilter id={cl.NewsFilter} />
			</div>
			<NewsContainer />
		</div>
	)
}

export default ChangeNews
