import { PlayerCardType } from '@/types/NewsOrPlayerCardType'
import { registerOptions } from '@/types/useFormType'
type PlayerCardWithoutId = Omit<PlayerCardType, 'player_id'> 
type PlayerCardWithoutIdAndBiography = Omit<PlayerCardWithoutId, 'Biography'>
const FieldArray: registerOptions<PlayerCardWithoutIdAndBiography>[] = [
	{
		inputName: 'FullName',
	},
	{
		inputName: 'DateOfBirth',
	},
	{
		inputName: 'role',
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


export { FieldArray,BiographyOptions }
