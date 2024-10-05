import {FC} from 'react';
import cl from './styles/team.module.scss'
import Logotype from '@/components/ui/logotype/logotype';
import UnpackingPlayers from '@/modules/team/UnpackingPlayers/UnpackingPlayers';


const TeamPage: FC = ({}) => {
    return (
			<div className={cl.pageContainer}>
				<div className={cl.CenterContainer}>
					<div className={cl.TeamContainer}>
						<Logotype FirstWord='Kokoc' SecondWord='Команда' />
						<UnpackingPlayers />
					</div>
				</div>
			</div>
		)
}

export default TeamPage