import ContentContainer from '@/modules/news[i]/ContentContainer/ContentContainer'
import cl from './style/page.module.scss'
import { FC } from 'react'




const NewsPage: FC = ({}) => {
	

	return (
		<div className={cl.Page}>
			<ContentContainer/>
		</div>
	)
}

export default NewsPage
