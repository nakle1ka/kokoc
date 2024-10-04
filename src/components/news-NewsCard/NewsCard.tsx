import { FC } from 'react'
import cl from './styles/NewsCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { NewsCardType } from '@/types/NewsCardType'



const NewsCard: FC<NewsCardType> = ({Date,NewsLogo,ImageSrc,href}) => {
	return (
		<Link href={href} className={cl.NewsLink}>
			<div className={cl.Card}>
				<Image
					className={cl.Image}
					src={ImageSrc}
					alt='Картинка новости'
					height={400}
				/>

				<div className={cl.NewsDescription}>
					<div className={cl.NewsDate}>{Date}</div>
					<div className={cl.NewsLogo}>
						{NewsLogo}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default NewsCard
