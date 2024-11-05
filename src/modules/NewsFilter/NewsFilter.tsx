'use client'

import { FC, PropsWithChildren } from 'react'
import { CustomSelect } from '@/components/ui/customSelect/customSelect'
import { filtersDate } from '@/modules/NewsFilter/helpers/newsFilters'

import cl from './styles/NewsFilter.module.scss'

type Props = {
	id?: string;
	value: string;
	onChange: (val: string) => void
}

const NewsFilter: FC<Props> = ({ id, onChange, value }) => {
	return (
		<form className={cl.FiltersContianer} id={id}>
			<CustomSelect
				value={value}
				onChange={onChange}
				trigger='По дате'
				items={filtersDate}
			/>
		</form>
	)
}

export default NewsFilter
