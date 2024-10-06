import { Newspaper, Check } from "lucide-react"
import { ListItemType } from "../components/types/listItemType"

const ListItems: ListItemType[] = [
	{
		icon: <Newspaper />,
		href: '/admin/changeNews',
		ItemName: 'Управление новостями',
	},
	{
		icon: <Check />,
		href: '/admin/changeShop',
		ItemName: 'Управление магазином',
	},
]
export default ListItems