import { FC } from 'react'
import cl from './style/page.module.scss'
import Logotype from '@/components/ui/logotype/logotype'
import TeamContainer from '@/modules/changeTeam/TeamContainer/TeamContainer'

const changeTeam: FC = ({}) => {
	return (
		<div className={cl.Page}>
			<div className={cl.UpperContainer}>
				<Logotype FirstWord='Модерирование' SecondWord='Команды' />
			</div>

			<TeamContainer />
		</div>
	)
}

export default changeTeam
