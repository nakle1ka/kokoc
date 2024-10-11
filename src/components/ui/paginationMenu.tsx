import { FC } from 'react'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationLink,
	PaginationNext,
} from './pagination'

type Props = {
	page: number
	allPages: number
	onFetchClick: (page: number) => void
	className?: string
}

const PagintationMenu: FC<Props> = ({
	page,
	allPages,
	onFetchClick,
	className,
}) => {
	return (
		<Pagination className={className}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href='#' onClick={() => onFetchClick(page - 1)} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href='#' onClick={() => onFetchClick(page)}>
						{page}
					</PaginationLink>
				</PaginationItem>
				{page + 1 <= allPages && (
					<PaginationLink href='#' onClick={() => onFetchClick(page + 1)}>
						{page + 1}
					</PaginationLink>
				)}
				<PaginationItem>
					{page + 2 <= allPages && (
						<PaginationLink href='#' onClick={() => onFetchClick(page + 2)}>
							{page + 2}
						</PaginationLink>
					)}
				</PaginationItem>

				<PaginationItem>
					<PaginationNext href='#' onClick={() => onFetchClick(page + 1)} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}

export default PagintationMenu
