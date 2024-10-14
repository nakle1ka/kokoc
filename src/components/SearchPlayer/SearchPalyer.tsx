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
import { PlayersStore } from '@/store/PlayersCardsStore'
import Link from 'next/link'

type Props = {
	id?:string
}

const SearchPlayer: FC<Props> = ({id}) => {
	const Players = PlayersStore(state => state.Players)
	const [value, setValue] = useState('')
	return (
		<div className={cl.SearchContainer} id={id}>
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
									<Link href={item.player_id}>
										<CommandItem
											className={cl.CommandItem}
											key={item.player_id}
										>
											{item.FullName}
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
