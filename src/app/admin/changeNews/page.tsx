import { FC } from 'react'
import cl from './style/changeNews.module.scss'
import Logotype from '@/components/ui/logotype/logotype'

import NewsContainer from '@/modules/newsChange/NewsContainer/NewsContainer'

const ChangeNews: FC = ({}) => {
	return (
		<div className={cl.Page}>
			<div className={cl.UpperContainer}>
				<Logotype FirstWord='Модерирование' SecondWord='Новостей' />
			</div>
			<NewsContainer />
		</div>
	)
}

export default ChangeNews
