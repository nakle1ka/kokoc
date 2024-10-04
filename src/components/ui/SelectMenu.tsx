import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

type Props = {
	placeholder: string
	items: string[]
	className?: string
	width?: string
	height?: string
	onChange?: (value: string) => void
}

function SelectMenu({
	placeholder,
	items,
	className,
	width,
	height,
	onChange,
}: Props) {
	return (
		<Select onValueChange={onChange}>
			<SelectTrigger
				className='w-[180px]'
				style={{ width: width, height: height }}
			>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent className={className}>
				{items.map((item, i) => (
					<SelectItem key={i} value={item.toLowerCase()}>
						{item}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}

export default SelectMenu
