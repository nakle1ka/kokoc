'use client'
import { FC } from 'react'
import cl from './style/CreatePlayer.module.scss'
import {
	BiographyOptions,
	FieldArray,
	PlayerCardWithoutId,
} from '../helpers/FieldArray'
import InputField from '@/components/useFormInputField/useFormInputfield'
import { useForm } from 'react-hook-form'
import { registerOptions } from '@/types/useFormType'
import TextareaField from '@/components/ui/TextareaUseForm/TextareaUseForm'
import { Button } from '@/components/ui/button'
import Alert from '@/components/ui/alert/alert'

type Props = {}

const CreatePlayerContainer: FC<Props> = ({}) => {
	const { register, handleSubmit, watch, formState } =
		useForm<PlayerCardWithoutId>()
	const errors =formState.errors.FullName?.message || formState.errors.role?.message
	const onSubmit = (data:PlayerCardWithoutId) =>{
		console.log(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{errors && <Alert>{errors}</Alert>}
			{FieldArray.map((item, i) => (
				<InputField
				key={i}
					register={register}
					watchLabel={watch}
					registerOptions={
						item as unknown as registerOptions<PlayerCardWithoutId>
					}
				/>
			))}
			<TextareaField
            id={cl.Textarea}
            placeholder='Биография'
				register={register}
				registerOptions={
					BiographyOptions as unknown as registerOptions<PlayerCardWithoutId>
				}
			/>
            <div className={cl.Submit}>
                <Button>Создать</Button>
            </div>
		</form>
	)
}

export default CreatePlayerContainer
