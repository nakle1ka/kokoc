import { FC } from 'react'

import GenericCard from '@/components/GenericCard/GenericCard'

import { TPlayer } from '@/types/playerType'

import cl from './styles/PlayerContainer.module.scss'

type Props = {
	logotype?: string
	PlayersCards: TPlayer[] | undefined
}

const PlayerContainer: FC<Props> = ({ logotype = "", PlayersCards }) => {
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
								FullName={card.FullName}
								photo={card.Photo}
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
