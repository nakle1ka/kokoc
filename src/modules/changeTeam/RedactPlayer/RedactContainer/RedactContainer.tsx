'use client'
import { ChangeEvent, FC, useState } from 'react'
import cl from './style/redactContainer.module.scss'
import Logotype from '@/components/ui/logotype/logotype'
import { Button } from '@/components/ui/button'
import InputField from '@/components/useFormInputField/useFormInputfield'
import { useForm, SubmitHandler } from 'react-hook-form'
import { BiographyOptions, FieldArray } from '../../helpers/FieldArray'
import { PlayerCardType } from '@/types/NewsOrPlayerCardType'
import TextareaField from '@/components/ui/TextareaUseForm/TextareaUseForm'
import { registerOptions } from '@/types/useFormType'
import { PlayersStore } from '@/store/PlayersCardsStore'

type PlayerCardWithoutId = Omit<PlayerCardType, 'player_id'>

const RedactContainer: FC = ({}) => {
	const { Players } = PlayersStore()
	const [globalInputValue, setGlobalInputValue] = useState(Players[0])
	const { register, handleSubmit, watch } = useForm<PlayerCardWithoutId>()

	const onRedact: SubmitHandler<PlayerCardWithoutId> = data => {
		console.log(data)
	}
	const onInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setGlobalInputValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
		console.log(globalInputValue)
	}

	return (
		<div>
			<Logotype FirstWord='Секция' SecondWord='Редактирования' />
			<form onSubmit={handleSubmit(onRedact)}>
				{FieldArray.map((item, i) => (
					<InputField
						key={i}
						register={register}
						watchLabel={watch}
						registerOptions={
							item as unknown as registerOptions<PlayerCardWithoutId>
						}
						eventOptions={{
							value: globalInputValue[item.inputName].toString(),
							onInput: onInput,
						}}
					/>
				))}
				<TextareaField register={register}
					id={cl.Textarea}
					registerOptions={
						BiographyOptions as unknown as registerOptions<PlayerCardWithoutId>
					}
					eventOptions={{ value: globalInputValue.Biography, onInput: onInput}}/>
				
				<div className={cl.SubmitContainer}>
					<Button>Сохранить</Button>
				</div>
			</form>
		</div>
	)
}

export default RedactContainer
