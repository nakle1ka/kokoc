'use client'
import { FC } from 'react'
import cl from './style/BlocksContainer.module.scss'

import NewsPageBlock from '../NewsPageBlock/NewsPageBlock'
import NewsPageBlocksStore from '@/store/NewsPageBlocks'

const BlocksContainer: FC = ({}) => {
    const NewsBlocks = NewsPageBlocksStore(state => state.Block.Blocks)
	return (
		<div className={cl.BlocksContainer}>
			{NewsBlocks.map((item, i) => (
				<NewsPageBlock
					key={i}
					BlockText={item.BlockText}
					BlockImage={item.BlockImage}
				/>
			))}
		</div>
	)
}

export default BlocksContainer
