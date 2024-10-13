'use client'
import { NewsCardStore } from '@/store/NewsStore'
import { useForm } from 'react-hook-form'
import { registerOptions } from '@/types/useFormType'
import { ChangeEvent, FC, useState } from 'react'
import { Button } from '@/components/ui/button'
import TextareaField from '@/components/ui/TextareaUseForm/TextareaUseForm'
import InputField from '@/components/useFormInputField/useFormInputfield'
import{ FieldArray, NeededNewsType } from '../helpers/FieldArray'
import cl from './style/RedactNews.module.scss'
import Alert from '@/components/ui/alert/alert'



const RedactNewsContainer: FC = ({}) => {
	const { NewsCards } = NewsCardStore()
	const { register, handleSubmit, watch,formState} = useForm<NeededNewsType>()
	const [globalInputValue, setGlobalInputValue] = useState(NewsCards[0])
	const onInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setGlobalInputValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}
	const onSubmit = (data: NeededNewsType) => {
		console.log(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
            {formState.errors.title?.message && <Alert>{formState.errors.title.message}</Alert>}
            <div></div>
			{FieldArray.map((item, i) => (
				<InputField
					key={i}
					watchLabel={watch}
					register={register}
					registerOptions={item as unknown as registerOptions<NeededNewsType>}
					eventOptions={{
						value: globalInputValue[item.inputName],
						onInput: onInput,
					}}
				/>
			))}
			<TextareaField
				id={cl.Textarea}
				register={register}
				eventOptions={{ value: globalInputValue.content, onInput: onInput }}
				registerOptions={{ inputName: 'content' }}
			/>
			<div className={cl.Submit}>
				<Button>Сохранить</Button>
			</div>
		</form>
	)
}

export default RedactNewsContainer
