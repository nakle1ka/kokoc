import { FC } from 'react';
import Logotype from '@/components/ui/logotype/logotype';
import UnpackingPlayers from '@/modules/team/UnpackingPlayers/UnpackingPlayers';
import SearchPlayer from '@/components/SearchPlayer/SearchPalyer';
import cl from './styles/team.module.scss'


const TeamPage: FC = ({ }) => {
	return (
		<div className={cl.pageContainer}>
			<div className={cl.CenterContainer}>
				<div className={cl.headerContainer}>
					<Logotype FirstWord='Kokoc' SecondWord='Команда' />
					<SearchPlayer />
				</div>
				<UnpackingPlayers />
			</div>
		</div>
	)
}

export default TeamPage