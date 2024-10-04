'use client'
import { FC, useState } from 'react'
import cl from './styles/NewsFilter.module.scss'
import FilterField from '@/components/FilterField/FilterField'

const filtersDate = ['новые', 'старые']
const filtersGroup = ['наш фк', 'что то']

const NewsFilter: FC = ({}) => {
	const [dateValue, setDateValue] = useState('')
	const [groupValue, setGroupValue] = useState('')

	return (
		<form className={cl.FiltersContianer}>
			<FilterField
				setValFunc={val => setDateValue(val)}
				placeholder='Все'
				Filters={filtersDate}
				FilterName='По дате'
			/>
			<FilterField
				setValFunc={val => setGroupValue(val)}
				placeholder='Все'
				Filters={filtersGroup}
				FilterName='По группе'
			/>
		</form>
	)
}

export default NewsFilter
