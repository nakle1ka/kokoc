'use client'
import PlayerStatistic from '@/components/InfoBefore/PlayerStatistic'
import PlayerBiography from '@/components/PlayerBiography/PlayerBiography'
import { PlayersStore } from '@/store/PlayersCardsStore'
import { FC } from 'react'

const GetPlayerStatistic: FC = ({}) => {
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
			<PlayerBiography Biography={Players[0].Biography} />
		</>
	)
}

export default GetPlayerStatistic
