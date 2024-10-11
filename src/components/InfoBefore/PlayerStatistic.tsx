import { FC } from 'react'
import cl from './style/infoBefore.module.scss'
import Image from 'next/image'
import { PlayerCardType } from '@/types/NewsorPlayerCardType'
import Logotype from '../ui/logotype/logotype'

const PlayerStatistic: FC<Omit<PlayerCardType, 'player_id'>> = props => {
	return (
		<div className={cl.test}>
			<div>
				<Logotype
					FirstWord={props.FullName.split(' ')[0]}
					SecondWord={props.FullName.split(' ')[1]}
				/>
				<div className={cl.RoleAndNumber}>
					<div>{props.role}</div>
					<div>{props.NumberInClub}</div>
				</div>
				<div className={cl.Stats}></div>
			</div>
			<div className={cl.PlayerMain}>
				<Image src='' alt='Фото игрока' />
				<div className={cl.PlayStatistic}></div>
			</div>
		</div>
	)
}

export default PlayerStatistic
