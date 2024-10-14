import { FC } from 'react'
import cl from './style/listItem.module.scss'
import Link from 'next/link'
import { ListItemType } from '../types/listItemType'



const ListItem: FC<ListItemType> = ({ icon, ItemName,href }) => {
	return (
		<Link href={href} id={cl.Link}>
			<div className={cl.ListItem}>
				<div className={cl.iconContainer}>{icon}</div>
				<div className={cl.ItemNameContainer}>
					<p className={cl.ItemNameText}>{ItemName}</p>
				</div>
			</div>
		</Link>
	)
}

export default ListItem
