import { FC } from 'react'
import cl from './styles/GenericCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { NewsCardType, PlayerCardType } from '@/types/NewsCardType'
import im from '@/images/Снимок экрана (300).png'
type Props = {
	id?: string
	alt: string
}

type NewsCardWithoutId = Omit<NewsCardType, 'id'>
type PlayerCardWithoutRole = Omit<PlayerCardType, 'role'>
type PlayerCardWithoutId = Omit<PlayerCardWithoutRole, 'id'>
type CombinedProps = NewsCardWithoutId | PlayerCardWithoutId

const GenericCard: FC<CombinedProps & Props> = props => {
	return (
		<Link href={props.href} className={cl.NewsLink} id={props.id}>
			<div className={cl.Card}>
				<Image
					className={cl.Image}
					src={im}
					alt={props.alt}
					height={400}
				/>

				<div className={cl.NewsDescription}>
					{'Date' in props && <div className={cl.NewsDate}>{props.Date}</div>}

					<div className={cl.NewsLogo}>{props.NameLogo}</div>
					{'NumberPlayer' in props && (
						<div className={cl.PlayerNumber}>{`№${props.NumberPlayer}`}</div>
					)}
				</div>
			</div>
		</Link>
	)
}

export default GenericCard
