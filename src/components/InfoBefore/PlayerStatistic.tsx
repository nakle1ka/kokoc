import Image from 'next/image'

import Logotype from '../ui/logotype/logotype'
import logo from '@/images/KokocLogo.png'

import { FC } from 'react'
import { TPlayer } from '@/types/playerType'

import cl from './style/PlayerStatistic.module.scss'

type Props = {
	playerData: TPlayer
}

const PlayerStatistic: FC<Props> = ({ playerData }) => {
	const splitName: string[] = playerData.FullName?.split(' ') || ['test', 'rwds']

	return (
		<div className={cl.Container}>
			<div className={cl.LeftContainer}>
				<Logotype
					FirstWord={splitName[0]}
					SecondWord={splitName[1]}
					id={cl.fullName}
				/>
				<div className={cl.RoleAndNumber}>
					<div>{playerData.role || 'Игрок'}</div>
					<div>№{playerData.NumberInClub || " ?"}</div>
				</div>
				<div className={cl.Stats}>
					<p>Вес:</p>
					<p>Рост:</p>
					<p>Дата рождения:</p>
					<p>{playerData.Weight || "? "}кг</p>
					<p>{playerData.Height || "? "}см</p>
					<p> {playerData.DateOfBirth || "? "}</p>
				</div>
			</div>

			<div className={cl.PlayerMain}>
				<img src={playerData.Photo} alt='Фото игрока' className={cl.PlayerImage} loading='lazy' />
				<div className={cl.PlayStatistic}>
					<div>
						<span>{playerData.Goals}</span>
						Голов
					</div>
					<Image src={logo} alt='' className={cl.LogoDecor} />
					<div>
						<span>{playerData.MatchesPlayed}</span>
						Матчев
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayerStatistic
