'use client'
import BlocksContainer from '@/modules/news[id]/BlockContainer/BlocksContainer'
import cl from './style/page.module.scss'
import { FC } from 'react'
import BlockHeader from '@/modules/news[id]/BlockHeader/BlockHeader'
import NewsPageBlocksStore from '@/store/NewsPageBlocks'

const NewsPage: FC = ({}) => {
	const MainHeader = NewsPageBlocksStore(state => state.Block.NewsLogotype)
	const MainImage = NewsPageBlocksStore(state => state.Block.NewsMainImage)
	return (
		<div className={cl.Page}>
			<BlockHeader NewsLogotype={MainHeader} NewsMainImage={MainImage} />
			<BlocksContainer />
		</div>
	)
}

export default NewsPage
