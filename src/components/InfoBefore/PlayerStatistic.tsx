import { FC } from 'react'
import cl from './style/PlayerStatistic.module.scss'
import Image from 'next/image'
import { PlayerCardType } from '@/types/NewsOrPlayerCardType'
import Logotype from '../ui/logotype/logotype'
import im from '@/images/Снимок экрана (300).png'
import logo from '@/images/KokocLogo.png'
const PlayerStatistic: FC<Omit<PlayerCardType, 'player_id'>> = props => {
	return (
		<div className={cl.Container}>
			<div className={cl.LeftContainer}>
				<Logotype
					FirstWord={props.FullName.split(' ')[0]}
					SecondWord={props.FullName.split(' ')[1]}
				/>
				<div className={cl.RoleAndNumber}>
					<div>{props.role}</div>
					<div>№{props.NumberInClub}</div>
				</div>
				<div className={cl.Stats}>
					<p>Вес:</p>
					<p>Рост:</p>
					<p>Дата рождения:</p>
					<p>{props.Weight}кг</p>
					<p>{props.Height}см</p>
					<p> {props.DateOfBirth}</p>
				</div>
			</div>
			<div className={cl.PlayerMain}>
				<Image src={im} alt='Фото игрока' className={cl.PlayerImage} />
				<div className={cl.PlayStatistic}>
					<div>
						<span>{props.Goals}</span>
						Голов
					</div>
					<Image src={logo} alt='' className={cl.LogoDecor} />
					<div>
						<span>{props.MatchesPlayed}</span>
						Матчев
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayerStatistic
