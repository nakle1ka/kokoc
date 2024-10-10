import { NewsBlockHeaderType } from '@/types/NewsPageBlock'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftCircle } from 'lucide-react'
import { FC } from 'react'
import cl from './style/BlockHeader.module.scss'
import im from '@/images/Снимок экрана (300).png'

const BlockHeader: FC<NewsBlockHeaderType> = ({
	NewsMainImage,
	NewsLogotype,
}) => {
	return (
		<header className={cl.Header}>
			<Image src={im} alt='Картинка новости' className={cl.MainImage} />
			<div className={cl.ReturnToNews}>
				<Link href='/news' className={cl.Link}>
					<ArrowLeftCircle className={cl.CircleLeft} />
					Вернуться к новостям
				</Link>
			</div>
			<h1 className={cl.NewsLogotype}>{NewsLogotype}</h1>
		</header>
	)
}

export default BlockHeader
