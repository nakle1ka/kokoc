import { FC } from 'react'
import cl from './styles/PlayerContainer.module.scss'
import { PlayerCardType } from '@/types/NewsOrPlayerCardType'
import GenericCard from '@/components/GenericCard/GenericCard'

type Props = {
	logotype: string
	PlayersCards: PlayerCardType[] | undefined
}

const PlayerContainer: FC<Props> = ({ logotype, PlayersCards }) => {
	return (
		<>
			{PlayersCards && (
				<div className={cl.PlayerContainer}>
					<h3 className={cl.GroupName}>{logotype}</h3>
					<div className={cl.Players}>
						{PlayersCards.map(card => (
							<GenericCard
								key={card.player_id}
								player_id={card.player_id}
								NumberInClub={card.NumberInClub}
								FullName={card.FullName}
                                alt='Фото игрока'
							/>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default PlayerContainer
