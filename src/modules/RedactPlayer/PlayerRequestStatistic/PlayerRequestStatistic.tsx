import PlayerStatistic from '@/components/InfoBefore/PlayerStatistic'
import { PlayersStore } from '@/store/PlayersCardsStore'
import { FC } from 'react'

const PlayerRequestStatistic: FC = ({}) => {
	const { Players } = PlayersStore()
	return (
		<PlayerStatistic/>
	)
}
    
export default PlayerRequestStatistic
