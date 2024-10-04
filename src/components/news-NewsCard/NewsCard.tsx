import { FC } from 'react'
import cl from './styles/NewsCard.module.scss'
import im from '../../images/Снимок экрана (300).png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const NewsCard: FC<Props> = ({}) => {
	return (
		<Link href={'2'} className={cl.NewsLink}>
			<div className={cl.Card}>
				<Image
					className={cl.Image}
					src={im}
					alt='Картинка новости'
					height={400}
				/>

				<div className={cl.NewsDescription}>
					<div className={cl.NewsDate}>30.04.2023</div>
					<div className={cl.NewsLogo}>
						Amazing goal afs asf asf safsfasffsafs asff
					</div>
				</div>
			</div>
		</Link>
	)
}

export default NewsCard
