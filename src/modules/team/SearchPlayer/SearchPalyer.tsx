'use client'
import { FC, useState } from 'react'
import cl from './style/SearchPlayer.module.scss'
import {
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
} from '@/components/ui/command'
import { PlayersStore } from '@/store/PlayersStore'
import Link from 'next/link'

type Props = {}

const SearchPlayer: FC<Props> = ({}) => {
	const Players = PlayersStore(state => state.Players)
	const [value, setValue] = useState('')
	return (
		<div className={cl.SearchContainer}>
			<Command className={cl.Search}>
				<CommandInput
					className={cl.Input}
					placeholder='Найдите игрока по имени...'
					onValueChange={val => setValue(val)}
					value={value}
				/>
				<CommandList>
					{value && (
						<>
							<CommandEmpty id={cl.EmptyFiled}>
								Не найдено совпадений.
							</CommandEmpty>
							<CommandGroup heading='Игроки'>
								{Players.map(item => (
									<Link href={item.href}>
										<CommandItem className={cl.CommandItem} key={item.id}>
											{item.NameLogo}
										</CommandItem>
									</Link>
								))}
							</CommandGroup>
						</>
					)}
				</CommandList>
			</Command>
		</div>
	)
}

export default SearchPlayer
