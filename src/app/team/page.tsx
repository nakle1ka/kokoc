import {FC} from 'react';
import cl from './styles/team.module.scss'
import Logotype from '@/components/ui/logotype/logotype';
import UnpackingPlayers from '@/modules/team/UnpackingPlayers/UnpackingPlayers';
import SearchPlayer from '@/modules/team/SearchPlayer/SearchPalyer';


const TeamPage: FC = ({}) => {
    return (
			<div className={cl.pageContainer}>
				<div className={cl.CenterContainer}>
					<div className={cl.TeamContainer}>
						<div className={cl.headerContainer}>
							<Logotype FirstWord='Kokoc' SecondWord='Команда' />
							<SearchPlayer />
						</div>
						<UnpackingPlayers />
					</div>
				</div>
			</div>
		)
}

export default TeamPage