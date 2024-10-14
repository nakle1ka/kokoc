import {FC} from 'react';
import cl from './style/logotype.module.scss'

type Props = {
    FirstWord:string;
    SecondWord:string;
    id?:string
}

const Logotype: FC<Props> = ({FirstWord,SecondWord,id}) => {
    return (
			<h1 className={cl.Logo} id={id}>
				<span>{FirstWord}</span>{SecondWord}
			</h1>
		)
}

export default Logotype