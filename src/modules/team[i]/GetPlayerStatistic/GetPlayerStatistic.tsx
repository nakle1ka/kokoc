import axios from 'axios';

import PlayerStatistic from '@/components/InfoBefore/PlayerStatistic'
import PlayerBiography from '@/components/PlayerBiography/PlayerBiography'

import { FC } from 'react'
import { TPlayer } from '@/types/playerType';

type Props = {
	id: string;
}

const GetPlayerStatistic: FC<Props> = async ({ id }) => {
	const player: TPlayer = (await axios.get(`http://localhost:3000/api/getPlayers?id=${id}`)).data

	return (
		<>
			<PlayerStatistic playerData={player} />
			<PlayerBiography Biography={player.Biography} />
		</>
	)
}

export default GetPlayerStatistic
