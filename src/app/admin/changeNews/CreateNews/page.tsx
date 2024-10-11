'use client'

import { FC } from 'react'
import cl from './style/page.module.scss'
import axios from 'axios'

type Props = {}

const CreateNews: FC<Props> = ({}) => {
	function SendNews() {
		const send = async () => {
			const data = await axios.post('https://34.0.251.246/news', {
				author: 'Me',
				title: 'Amazing goal test1 12313 alsf asf',
				content:
					'loremadsads;lfksdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdkf;l kdslkf;l ksd;lfk ;lskdf ksd;lfk ;lsd',
				category: 'my xlub',
				media: [],
				tags: [],
			})
			console.log(data)
		}
		send()
	}

	return (
		<div style={{ textAlign: 'center' }}>
			<button onClick={SendNews}>send</button>
		</div>
	)
}

export default CreateNews
