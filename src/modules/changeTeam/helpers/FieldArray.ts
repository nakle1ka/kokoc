import { PlayerCardType } from '@/types/NewsOrPlayerCardType'
import { registerOptions } from '@/types/useFormType'
type PlayerCardWithoutId = Omit<PlayerCardType, 'player_id'> 
type PlayerCardWithoutIdAndBiography = Omit<PlayerCardWithoutId, 'Biography'>
const rolesArray = ['Нападающий', 'Защитник', 'Полузащитник', 'Вратарь', 'Ушли', 'Тренер']
const FieldArray: registerOptions<PlayerCardWithoutIdAndBiography>[] = [
	{
		inputName: 'FullName',
		required:'Имя обязательно'
	},
	{
		inputName: 'DateOfBirth',
	},
	{
		inputName: 'role',
		validate:(val)=>(rolesArray.includes(val) ? '': 'Роль не соотвествует шаблону'),
		required:'Роль обязательна(Нападающий,Защитник,Полузащитник,Вратарь,Ушли,Тренер)'
	},

	{
		inputName: 'NumberInClub',
	},

	{
		inputName: 'Weight',
	},

	{
		inputName: 'Height',
	},

	{
		inputName: 'Goals',
	},

	{
		inputName: 'MatchesPlayed',
	},
]
type BiogrpahyType = Pick<PlayerCardType,'Biography'>

const BiographyOptions :registerOptions<BiogrpahyType>= {
	inputName:'Biography'
}


export { FieldArray,BiographyOptions, }
export type { PlayerCardWithoutId }
