import {FC} from 'react';
import cl from './styles/FilterField.module.scss'
import SelectMenu from '../ui/SelectMenu';

type Props = {
    setValFunc: (val:string) => void;
    Filters:string[];
    placeholder:string;
    FilterName:string
}

const FilterField: FC<Props> = ({setValFunc,Filters,placeholder,FilterName}) => {
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