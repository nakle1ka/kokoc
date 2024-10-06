import { FC } from 'react'
import cl from './styles/PlayerContainer.module.scss'
import { PlayerCardType } from '@/types/NewsCardType'
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
								key={card.id}
								href={card.href}
								ImageSrc={card.ImageSrc}
								NumberPlayer={card.NumberPlayer}
								NameLogo={card.NameLogo}
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
