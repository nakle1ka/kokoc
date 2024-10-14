import { NewsCardType } from "@/types/NewsOrPlayerCardType"
import { registerOptions } from "@/types/useFormType"

type FieldArrayRedactType = Pick<NewsCardType, 'category'> &
	Pick<NewsCardType, 'author'> &
	Pick<NewsCardType, 'title'>

const FieldArray:registerOptions<FieldArrayRedactType>[] = [
	{ inputName: 'title',required:'Поле заголовка обязательно' },
	{ inputName: 'category',required:'Поле категории обязательно' },
	{ inputName: 'author' },
]

type NeededNewsType = Pick<NewsCardType, 'category'> &
	Pick<NewsCardType, 'author'> &
	Pick<NewsCardType, 'title'> &
	Pick<NewsCardType, 'content'>
export { FieldArray }
export type { NeededNewsType }
