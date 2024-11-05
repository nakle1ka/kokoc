'use client'

import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import Logotype from '@/components/ui/logotype/logotype';
import UnpackingNews from '../UnpackingNews';
import MainNews from '../MainNews/MainNews';
import NewsFilter from '@/modules/NewsFilter/NewsFilter';

import { Tnews } from '@/types/newsType';

import cl from './pageContainer.module.scss'



const PageContainer: FC = ({ }) => {

	const [news, setNews] = useState([] as Tnews[])
	const [latesNews, setLatestNews] = useState({} as Tnews)
	const [filter, setFilter] = useState<string>("новые")

	useEffect(() => {
		async function getNews() {
			const res = (await axios.get(
				`/api/getNews?filter=${filter === 'новые' ? 'new' : 'old'}`
			)).data
			setNews(res)
		}
		getNews()
	}, [filter])

	useEffect(() => {
		async function getLatestNews() {
			const res = (await axios.get('/api/getNews?latest=true')).data
			setLatestNews(res)
		}
		getLatestNews()
	}, [])

	return (
		<div className={cl.pageContainer} >
			<div className={cl.CenterContainer}>
				<MainNews
					newsData={latesNews}
				/>

				<div className={cl.headerContainer}>
					<Logotype FirstWord='Kokoc' SecondWord='Новости' id={cl.logotype} />
					<NewsFilter
						value={filter}
						onChange={(val: string) => setFilter(val)}
					/>
				</div>

				<UnpackingNews
					NewsCards={news}
				/>
			</div>
		</div>
	)
}

export default PageContainer