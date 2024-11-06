import { FC } from 'react'
import cl from './style/PlayerBiography.module.scss'
import Logotype from '../ui/logotype/logotype'

type Props = {
	Biography?: string
}

const PlayerBiography: FC<Props> = ({ Biography }) => {

	return (
		<div className={cl.Container}>
			<Logotype FirstWord='Биография' SecondWord='' id={cl.Logotype} />
			<div className={cl.BiographyContainer}>

				<p className={cl.paragraph}>
					{Biography || "Недостаточно информации о данном игроке."}
				</p>

			</div>
		</div>
	)
}

export default PlayerBiography
