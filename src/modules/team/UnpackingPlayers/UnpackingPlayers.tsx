'use client'
import { PlayersStore } from '@/store/PlayersStore'
import { FC } from 'react'
import PlayerContainer from './components/PlayerContainer'
import { PlayerCardType } from '@/types/NewsCardType'

const UnpackingPlayers: FC = ({}) => {
	const Players = PlayersStore(state => state.Players)
	const GroupedPlayers = Object.groupBy(Players, ({ role }) => role)
	const roles: PlayerCardType['role'][] = [
		'Вратарь',
		'Защитник',
		'Нападающий',
		'Полузащитник',
		'Тренер',
        'Ушли',
	]
	return (
		<>
			{roles.map((item, i) => (
				<PlayerContainer
					key={i}
					logotype={item}
					PlayersCards={GroupedPlayers[item]}
				/>
			))}
		</>
	)
}

export default UnpackingPlayers
