import { FC } from 'react'
import cl from './styles/GenericCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { NewsCardType, PlayerCardType } from '@/types/NewsorPlayerCardType'
import im from '@/images/Снимок экрана (300).png'
type Props = {
	id?: string
	alt: string
}

type NeededNewsCardType = Pick<NewsCardType, 'title'> &
	Pick<NewsCardType, 'published_at'> &
	Pick<NewsCardType, 'news_id'>

type NeededPlayerCardType = Pick<PlayerCardType, 'FullName'> &
	Pick<PlayerCardType, 'player_id'> &
	Pick<PlayerCardType, 'NumberInClub'>

type CombinedProps = NeededNewsCardType | NeededPlayerCardType

const GenericCard: FC<CombinedProps & Props> = props => {
	return (
		<Link
			href={`${'player_id' in props ? props.player_id : props.news_id}`}
			className={cl.CardLink}
			id={props.id}
		>
			<div className={cl.Card}>
				<Image className={cl.Image} src={im} alt={props.alt} height={400} />

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
