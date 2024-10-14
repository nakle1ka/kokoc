import { FC } from 'react'
import cl from './style/page.module.scss'
import CreatePlayerContainer from '@/modules/changeTeam/CreatePlayer/CreatePlayer'
import Logotype from '@/components/ui/logotype/logotype'

type Props = {}

const CreatePlayer: FC<Props> = ({}) => {
	return (
		<div className={cl.Page}>
			<Logotype FirstWord='Добавить' SecondWord='Игрока' />
			<CreatePlayerContainer />
		</div>
	)
}

export default CreatePlayer
