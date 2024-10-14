import { FC } from 'react'
import cl from './style/PlayerBiography.module.scss'
import { PlayerCardType } from '@/types/NewsOrPlayerCardType'
import Logotype from '../ui/logotype/logotype'
import splitIntoParagraphs from '@/utils/splitIntoParagraphs'

type Props = {
	Biography: PlayerCardType['Biography']
}

const PlayerBiography: FC<Props> = ({ Biography }) => {
	

	const paragraphs = splitIntoParagraphs(Biography)
	return (
		<div className={cl.Container}>
			<Logotype FirstWord='Биография' SecondWord=''id={cl.Logotype} />
			<div className={cl.BiographyContainer}>
				{paragraphs.map((item, i) => (
					<p key={i} className={cl.paragraph}>
						{item}
					</p>
				))}
			</div>
		</div>
	)
}

export default PlayerBiography
