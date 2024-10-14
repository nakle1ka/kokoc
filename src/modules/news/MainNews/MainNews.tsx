import { FC } from 'react'
import cl from './styles/MainNews.module.scss'
import im from '../../../images/Снимок экрана (300).png'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}

const MainNews: FC<Props> = ({}) => {
	return (
		<div className={cl.MainNews}>
			<div className={cl.MainContent}>
				<Image src={im} alt='Главная Новость' className={cl.MainNewsImage} />
			</div>
			<div className={cl.MainNewsTextBlock}>
				<Link href={'/'} className={cl.MainNewsLogo}>
					Борис Ротенберг поздравил женскую молодёжку с чемпионством
				</Link>
				<div className={cl.MainNewsDescription}>
					Заместитель генерального директора по развитию молодёжного футбола ФК
					 Борис Борисович Ротенберг поздравил женскую молодежную
					команду  с чемпионством в Молодёжной лиге – 2024 и...
				</div>
			</div>
		</div>
	)
}

export default MainNews
