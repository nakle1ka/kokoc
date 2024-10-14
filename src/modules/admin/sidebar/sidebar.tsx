'use client'
import { FC, useRef, useState } from 'react'
import ListItem from './components/listItem/listItem'
import { MainButton } from '@/components/ui/mainButton/mainButton'
import {useClickOutside} from '@reactuses/core'
import ListItems from './helpers/SlidebarItems'
import cl from './style/sidebar.module.scss'
type Props = {}


const Sidebar: FC<Props> = ({}) => {
	const [isOpen, setIsOpen] = useState(false)
	const SlidebarRef = useRef(null)
	useClickOutside(SlidebarRef,()=>setIsOpen(false))
	return (
		<>
			<MainButton id={isOpen ? cl.closingButton : cl.OpenButton} text='Меню' onClick={() => setIsOpen(true)} />
				<div className={cl.Sidebar} ref={SlidebarRef} id={isOpen ? '' : cl.Close}>
					<h2 className={cl.SidebarLogo}>Меню</h2>
					<div className={cl.ItemsContainer}>
						{ListItems.map((item, i) => (
							<ListItem
								key={i}
								href={item.href}
								ItemName={item.ItemName}
								icon={item.icon}
							/>
						))}
					</div>
				</div>
			
		</>
	)
}

export default Sidebar
