import { FC } from 'react'
import cl from './style/NewsCard.module.scss'
import { NewsCardType, PlayerCardType } from '@/types/NewsOrPlayerCardType'
import Link from 'next/link'
import { Edit, Trash } from 'lucide-react'
type NeededNewsCardType = Pick<NewsCardType, 'news_id'> &
	Pick<NewsCardType, 'title'> &
	Pick<NewsCardType, 'category'> &
	Pick<NewsCardType, 'published_at'> &
	Pick<NewsCardType, 'author'>

type NeededPlayerCardType = Pick<PlayerCardType, 'player_id'> &
	Pick<PlayerCardType, 'FullName'> &
	Pick<PlayerCardType, 'NumberInClub'> &
	Pick<PlayerCardType, 'role'> &
	Pick<PlayerCardType, 'DateOfBirth'>
const NewsOrPlayerAdminCard: FC<
	NeededNewsCardType | NeededPlayerCardType
> = props => {
	return (
		<div className={cl.Card}>
			<Link
				href={
					'news_id' in props
						? `/news/${props.news_id}`
						: `/team/${props.player_id}`
				}
			>
				<div>
					<p className={cl.CardName}>
						{'title' in props ? (
							<>Заголовок: {props.title.slice(0, 65)}...</>
						) : (
							<>Имя: {props.FullName}</>
						)}
					</p>
				</div>
			</Link>
			<div className={cl.CardId}>
				<span className={cl.bold}>id:</span>{' '}
				{'news_id' in props ? props.news_id : props.player_id}
			</div>
			<div className={cl.CardAuthor}>
				{'author' in props ? (
					<>автор: {props.author}</>
				) : (
					<>роль: {props.role}</>
				)}
			</div>
			<div className={cl.CardCategory}>
				{'category' in props ? (
					<>
						категория:<span className={cl.bold}> "{props.category}"</span>
					</>
				) : (
					<>
						Номер: <span className={cl.bold}> "{props.NumberInClub}"</span>
					</>
				)}
			</div>
			<div className={cl.CardDate}>
				{'published_at' in props ? (
					<>
						Дата создания: <span className={cl.bold}>{props.published_at}</span>
					</>
				) : (
					<>
						Дата рождения: <span className={cl.bold}>{props.DateOfBirth}</span>
					</>
				)}
			</div>
			<div className={cl.CardEdit}>
				<Link
					href={
						'news_id' in props
							? `/admin/changeNews/redact/${props.news_id}`
							: `/admin/changeTeam/redact/${props.player_id}`
					}
				>
					<Edit color='rgb(52, 141, 139)' className={cl.EditIcon} />
				</Link>
				<Trash color='#e33046' className={cl.DeleteIcon} />
			</div>
		</div>
	)
}

export default NewsOrPlayerAdminCard
