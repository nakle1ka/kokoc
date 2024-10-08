'use client'
import {  FC, PropsWithChildren, useState } from 'react'
import cl from './styles/NewsFilter.module.scss'
import FilterField from '@/components/FilterField/FilterField'
import { filtersDate, filtersGroup } from '@/store/newsFilters'

type Props = {
	id?:string;
}

const NewsFilter: FC<PropsWithChildren<Props>> = ({id,children}) => {
	const [dateFilters, setDateFilters] = useState('')
	const [groupFilter, setGroupFilters] = useState('')
	
	return (
		<form className={cl.FiltersContianer} id={id}>
			<FilterField
				setValFunc={val => setDateFilters(val)}
				placeholder='Все'
				Filters={filtersDate}
				FilterName='По дате'
			/>
			<FilterField
				setValFunc={val => setGroupFilters(val)}
				placeholder='Все'
				Filters={filtersGroup}
				FilterName='По группе'
			/>
			{children}
		</form>
	)
}

export default NewsFilter
