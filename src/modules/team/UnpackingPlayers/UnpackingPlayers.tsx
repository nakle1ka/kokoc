'use client'
import { FC, useEffect, useState } from 'react'
import PlayerContainer from './components/PlayerContainer'
import axios from 'axios'
import { TPlayer } from '@/types/playerType'

const UnpackingPlayers: FC = ({ }) => {
	const [Players, setPlayers] = useState([] as TPlayer[])

	useEffect(() => {
		async function getPlayers() {
			const res = (await axios.get('/api/getPlayers')).data
			console.log(res)
			setPlayers(res)
		}

		getPlayers()
	}, [])
	return (
		<>
			<PlayerContainer
				PlayersCards={Players}
			/>
		</>
	)
}

export default UnpackingPlayers
