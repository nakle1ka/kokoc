'use client'

import axios from 'axios'
import Link from 'next/link'

import Logotype from '@/components/ui/logotype/logotype'
import { ArrowLeftCircle } from 'lucide-react'

import { FC, useEffect, useState } from 'react'
import { Tnews } from '@/types/newsType'

import cl from './style/ContentContainer.module.scss'
import { Loader } from '@/components/loader/loader'

type Props = {
	id: string;
}

const ContentContainer: FC<Props> = ({ id }) => {
	const [newsData, setNewsData] = useState({} as Tnews)
	
	useEffect(() => {
		async function fetchNewsData() {
			const res: Tnews = (await axios.get(`/api/getNews?id=${id}`)).data
			setNewsData(res)
		}

		try {
			fetchNewsData()
		} catch (err) {
			console.error(err)
		}
	}, [])

	return (
		<div className={cl.ContentContainer}>

			<Link href='/news' className={cl.ReturnLink}>
				<div className={cl.ReturnToNews}>
					<ArrowLeftCircle /> Вернуться к новостям
				</div>
			</Link>

			<img
				src={newsData.media}
				alt="Фото новостей"
				loading='lazy'
				className={cl.media}
			/>

			<Logotype FirstWord={newsData.title} SecondWord='' id={cl.Logotype} />

			<p className={cl.Paragraph}>
				{newsData.description}
			</p>

			<p className={cl.info}>
				<span>{newsData.category}</span>
				<span>{newsData.date}</span>
			</p>
		</div>
	)
}

export default ContentContainer
