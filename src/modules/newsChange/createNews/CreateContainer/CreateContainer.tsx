'use client'
import { FC } from 'react'
import cl from './style/CreateContainer.module.scss'
import { FieldArray, NeededNewsType } from '../../helpers/FieldArray'
import InputField from '@/components/useFormInputField/useFormInputfield'
import { useForm } from 'react-hook-form'
import { registerOptions } from '@/types/useFormType'
import TextareaField from '@/components/ui/TextareaUseForm/TextareaUseForm'
import { Button } from '@/components/ui/button'
import Alert from '@/components/ui/alert/alert'

type Props = {}

const CreateContainer: FC<Props> = ({}) => {
	const { register, handleSubmit, watch, formState } = useForm<NeededNewsType>()
	const onSubmit = (data: NeededNewsType) => {}
	const errors =
		formState.errors.category?.message ||
		formState.errors.title?.message ||
		formState.errors.content?.message
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{errors && <Alert>{errors}</Alert>}

			{FieldArray.map((item, i) => (
				<InputField
					register={register}
					watchLabel={watch}
					registerOptions={item as unknown as registerOptions<NeededNewsType>}
				/>
			))}
			<TextareaField
				register={register}
				registerOptions={{
					inputName: 'content',
					required: 'Поле контента обязательно',
				}}
				id={cl.Textarea}
			/>
			<div className={cl.Submit}>
				<Button>Создать</Button>
			</div>
		</form>
	)
}

export default CreateContainer
