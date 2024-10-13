'use client'
import { FC, useState } from 'react'
import ChangeContainer from '@/components/ChangeContainer/ChangeContainer'
import { PlayersStore } from '@/store/PlayersCardsStore'
import NewsOrPlayerAdminCard from '@/components/NewsCards/NewsOrPlayerAdminCards'



const TeamContainer: FC = ({}) => {
    const [page,setPage] = useState(1)
	const { Players } = PlayersStore()
	return (
		<ChangeContainer CreateNewText='Добавить игрока'>
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
