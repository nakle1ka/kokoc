import {FC, PropsWithChildren} from 'react';
import cl from './style/ChangeContainer.module.scss' 
import { Button } from '../ui/button';



type Props = {
    FilterCards?:JSX.Element;
    CreateNewText:string
    
}

const ChangeContainer: FC<PropsWithChildren<Props>> = ({children,FilterCards,CreateNewText}) => {
    return (
			<div className={cl.Container}>
				<div className={cl.CardsContainer}>
                    {FilterCards}
					<header className={cl.CreateNew}>
						<Button className={cl.CreateButton}>{CreateNewText}</Button>
					</header>
                    {children}
					
				</div>
			</div>
		)
}

export default ChangeContainer