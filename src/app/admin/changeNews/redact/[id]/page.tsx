import RedactNewsContainer from '@/modules/newsChange/RedactNews/RedactNews'
import { FC } from 'react'
import cl from './style/page.module.scss'
import Logotype from '@/components/ui/logotype/logotype'
const RedactNews: FC = ({}) => {
	return (
		<div className={cl.Page}>
			<Logotype FirstWord='Редактирование' SecondWord='Новости'/>
			<RedactNewsContainer />
		</div>
	)
}

export default RedactNews
