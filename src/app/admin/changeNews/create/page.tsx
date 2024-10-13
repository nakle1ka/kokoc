import { FC } from 'react'
import cl from './style/page.module.scss'
import CreateContainer from '@/modules/newsChange/createNews/CreateContainer/CreateContainer'
import Logotype from '@/components/ui/logotype/logotype'

type Props = {}

const CreateNews: FC<Props> = ({}) => {
	return (
		<div className={cl.Page}>
			<Logotype FirstWord='Создать'SecondWord='Новость'/>
			<CreateContainer/>
		</div>
	)
}

export default CreateNews
