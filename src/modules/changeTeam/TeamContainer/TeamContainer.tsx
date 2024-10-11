'use client'
import { FC, useState } from 'react'
import ChangeContainer from '@/components/ChangeContainer/ChangeContainer'
import { PlayersStore } from '@/store/PlayersCardsStore'
import NewsOrPlayerAdminCard from '@/components/NewsCards/NewsOrPlayerAdminCards'
import SearchPlayer from '@/components/SearchPlayer/SearchPalyer'
import cl from './style/TeamContainer.module.scss'
type Props = {}

const TeamContainer: FC<Props> = ({}) => {
    const [page,setPage] = useState(1)
	const { Players } = PlayersStore()
	return (
		<ChangeContainer CreateNewText='Добавить игрока' FilterCards={<SearchPlayer id={cl.Search}/>}>
			{Players.map(item => (
				<NewsOrPlayerAdminCard
					player_id={item.player_id}
					FullName={item.FullName}
					NumberInClub={item.NumberInClub}
					role={item.role}
					DateOfBirth={item.DateOfBirth}
				/>
			))}
			
		</ChangeContainer>
	)
}

export default TeamContainer
