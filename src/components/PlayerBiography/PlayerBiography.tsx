import { FC } from 'react'
import cl from './style/PlayerBiography.module.scss'
import { PlayerCardType } from '@/types/NewsOrPlayerCardType'
import Logotype from '../ui/logotype/logotype'

type Props = {
	Biography: PlayerCardType['Biography']
}

const PlayerBiography: FC<Props> = ({ Biography }) => {
	const splitIntoParagraphs = (text: string) => {
		const sentences = text.split(/(?<=[.!?])\s+/)
		const paragraphs = []

		for (let i = 0; i < sentences.length; i += 3) {
			paragraphs.push(sentences.slice(i, i + 3).join(' '))
		}

		return paragraphs
	}

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
