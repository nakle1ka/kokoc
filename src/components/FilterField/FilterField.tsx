import {FC} from 'react';
import cl from './styles/FilterField.module.scss'
import SelectMenu from '../ui/SelectMenu';
import { SelectFieldType } from '@/types/SelectFieldType';



const FilterField: FC<SelectFieldType> = ({setValFunc,Filters,placeholder,FilterName}) => {
    return (
			<div className={cl.FilterContainer}>
				<h2 className={cl.FilterName}>{FilterName}</h2>
				<SelectMenu
					onChange={setValFunc}
					placeholder={placeholder}
					items={Filters}
					className={cl.SelectFilter}
					width='100%'
				/>
			</div>
		)
}

export default FilterField