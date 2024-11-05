import { FC } from 'react'
import ContentContainer from '@/modules/news[i]/ContentContainer/ContentContainer'
import cl from './style/page.module.scss'

type Props = {
	params: {
		id: string;
	}
}

const NewsPage: FC<Props> = async ({ params }) => {

	return (
		<div className={cl.Page}>
			<ContentContainer id={params.id} />
		</div>
	)
}

export default NewsPage
