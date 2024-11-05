import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'
import { NewsCardType, PlayerCardType } from '@/types/NewsOrPlayerCardType'

import cl from './styles/GenericCard.module.scss'

type Props = {
	id?: string
	photo: string;
	alt: string
}

type NeededNewsCardType = Pick<NewsCardType, 'title'> &
	Pick<NewsCardType, 'published_at'> &
	Pick<NewsCardType, 'news_id'>

type NeededPlayerCardType = Pick<PlayerCardType, 'FullName'> &
	Pick<PlayerCardType, 'player_id'>

type CombinedProps = NeededNewsCardType | NeededPlayerCardType

const GenericCard: FC<CombinedProps & Props> = props => {
	return (
		<Link
			href={'player_id' in props ? `/team/${props.player_id}` : `/news/${props.news_id}`}
			className={cl.CardLink}
			id={props.id}
		>
			<div className={cl.Card}>
				<img className={cl.Image} src={props.photo} alt={props.alt} loading='lazy' />

				<div className={cl.CardDescription}>
					{'published_at' in props && (
						<div className={cl.NewsDate}>{props.published_at}</div>
					)}

					<div className={cl.NameLogo}>
						{'title' in props ? props.title : props.FullName}
					</div>

					{'NumberInClub' in props && (
						<div className={cl.PlayerNumber}>{`№${props.NumberInClub}`}</div>
					)}
				</div>
			</div>
		</Link>
	)
}

export default GenericCard
