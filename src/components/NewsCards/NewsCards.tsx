import { FC } from 'react'
import cl from './style/NewsCard.module.scss'
import { NewsCardType } from '@/types/NewsCardType'
import Link from 'next/link'
import {  Edit, Trash } from 'lucide-react'

const NewsCard: FC<Omit<NewsCardType,'ImageSrc'>> = props => {
	return (
		<div className={cl.Card}>
			<Link href={props.href}>
				<div>
					<p className={cl.CardName}>{props.NameLogo.slice(0,35)}...</p>
				</div>
			</Link>
			<div className={cl.CardDate}>дата создания: {props.Date}</div>
			<div className={cl.CardsId}>id: {props.id}</div>
			<div className={cl.CardEdit}>
				<Edit color='rgb(52, 141, 139)' className={cl.EditIcon} />
				<Trash color='#e33046' className={cl.DeleteIcon} />
			</div>
		</div>
	)
}

export default NewsCard
