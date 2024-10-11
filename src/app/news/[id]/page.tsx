'use client'
import BlocksContainer from '@/modules/news[id]/BlockContainer/BlocksContainer'
import cl from './style/page.module.scss'
import { FC } from 'react'
import { NewsCardStore } from '@/store/NewsStore'


const NewsPage: FC = ({}) => {
	const AllDataPage = NewsCardStore()

	return (
		<div className={cl.Page}>
			{/* <BlockHeader NewsLogotype={MainHeader} NewsMainImage={MainImage} /> */}
			<BlocksContainer />
		</div>
	)
}

export default NewsPage
