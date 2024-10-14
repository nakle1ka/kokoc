import { FC, PropsWithChildren } from 'react'
import cl from './style/ChangeContainer.module.scss'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {
	FilterCards?: JSX.Element
	CreateNewText: string
	href: string
}

const ChangeContainer: FC<PropsWithChildren<Props>> = ({
	children,
	FilterCards,
	CreateNewText,
	href,
}) => {
	return (
		<div className={cl.Container}>
			<div className={cl.CardsContainer}>
				{FilterCards}
				<header className={cl.CreateNew}>
					<Link href={href}>
						<Button className={cl.CreateButton}>{CreateNewText}</Button>
					</Link>
				</header>
				{children}
			</div>
		</div>
	)
}

export default ChangeContainer
