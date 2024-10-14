'use client'
import Logotype from '@/components/ui/logotype/logotype';
import {FC} from 'react';
import UnpackingNews from '../UnpackingNews';
import cl from './pageContainer.module.scss'
import MainNews from '../MainNews/MainNews';
import NewsFilter from '@/modules/NewsFilter/NewsFilter';



const PageContainer: FC = ({}) => {
	
    return (
			<div className={cl.pageContainer} >
				<div className={cl.CenterContainer}>
					<MainNews /> 
					<div className={cl.headerContainer}>
						<Logotype FirstWord='Kokoc' SecondWord='Новости' id={cl.logotype} />
						<NewsFilter /> 
					</div>

					<UnpackingNews />
				</div>
			</div>
		)
}

export default PageContainer