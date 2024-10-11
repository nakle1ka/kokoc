'use client'
import { FC } from 'react'
import cl from './style/BlocksContainer.module.scss'



const BlocksContainer: FC = ({}) => {
    
	return (
		<div className={cl.BlocksContainer}>
			{/* {NewsBlocks.map((item, i) => (
				<NewsPageBlock
					key={i}
					BlockText={item.BlockText}
					BlockImage={item.BlockImage}
				/>
			))} */}
		</div>
	)
}

export default BlocksContainer
