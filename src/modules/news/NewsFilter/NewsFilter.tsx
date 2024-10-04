'use client'
import { FC, useState } from 'react'
import cl from './styles/NewsFilter.module.scss'
import SelectMenu from '@/components/ui/SelectMenu'

const filtersDate = ['новые', 'старые']
const filtersGroup = ['наш фк', 'что то']

const NewsFilter: FC = ({}) => {
	const [dateValue,setDateValue] = useState('')
	const [groupValue, setGroupValue] = useState('')
	
	return (
		<form className={cl.FiltersContianer}>
			<div className={cl.FilterContainer}>
				<h2 className={cl.FilterName}>По группе</h2>
				<SelectMenu
					onChange={val => setDateValue(val)}
					placeholder='По дате'
					items={filtersDate}
					className={cl.SelectFilter}
					width='100%'
				/>
			</div>
			<div className={cl.FilterContainer}>
				<h2 className={cl.FilterName}>По дате</h2>
				<SelectMenu
					onChange={val => setGroupValue(val)}
					placeholder='По группе'
					items={filtersGroup}
					className={cl.SelectFilter}
					width='100%'
				/>
			</div>
		</form>
	)
}

export default NewsFilter
