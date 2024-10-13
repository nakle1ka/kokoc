'use client'
import { FC } from 'react'
import cl from './style/ContentContainer.module.scss'
import { NewsCardStore } from '@/store/NewsStore'
import splitIntoParagraphs from '@/utils/splitIntoParagraphs'
import Logotype from '@/components/ui/logotype/logotype'
import Link from 'next/link'
import { ArrowLeftCircle } from 'lucide-react'

const ContentContainer: FC = ({}) => {
	const { NewsCards } = NewsCardStore()
	const paragrpahs = splitIntoParagraphs(NewsCards[0].content)
	return (
		<div className={cl.ContentContainer}>
			<Logotype FirstWord={NewsCards[0].title} SecondWord='' id={cl.Logotype} />
			<Link href='/news' className={cl.ReturnLink}>
				<div className={cl.ReturnToNews}>
					<ArrowLeftCircle /> Вернуться к новостям
				</div>
			</Link>
			{paragrpahs.map((item, i) => (
				<p key={i} className={cl.Paragraph}>
					{item}
				</p>
			))}
		</div>
	)
}

export default ContentContainer
