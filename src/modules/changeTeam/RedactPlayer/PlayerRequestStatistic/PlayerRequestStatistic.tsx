'use client'
import PlayerStatistic from '@/components/InfoBefore/PlayerStatistic'
import { PlayersStore } from '@/store/PlayersCardsStore'
import { FC } from 'react'
import RedactContainer from '../RedactContainer/RedactContainer'
import PlayerBiography from '@/components/PlayerBiography/PlayerBiography'

const PlayerRequestStatistic: FC = ({}) => {
	const { Players } = PlayersStore()
	return (
		<>
			<PlayerStatistic
				role={Players[0].role}
				NumberInClub={Players[0].NumberInClub}
				FullName={Players[0].FullName}
				Weight={Players[0].Weight}
				Height={Players[0].Height}
				DateOfBirth={Players[0].DateOfBirth}
				Biography={Players[0].Biography}
				Goals={Players[0].Goals}
				MatchesPlayed={Players[0].MatchesPlayed}
			/>
			<PlayerBiography Biography={Players[0].Biography}/>
			<RedactContainer />
		</>
	)
}

export default PlayerRequestStatistic
