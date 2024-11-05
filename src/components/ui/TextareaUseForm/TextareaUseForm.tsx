
import { Textarea } from '../textarea'
import { UseFormRegister } from 'react-hook-form'
import { registerOptions } from '@/types/useFormType'
import { ChangeEvent } from 'react'

type props<T extends object> = {
	registerOptions: registerOptions<T>
	inputError?: string | undefined
	watchLabel?: (arg: string) => string
	register: UseFormRegister<T>
	id?: string
	placeholder?: string
	eventOptions?: {
		onInput: (e: ChangeEvent<HTMLTextAreaElement>) => void
		value: string
	}
}

function TextareaField<T extends object>({
	register,
	registerOptions,
	inputError,
	watchLabel,
	id,
	eventOptions,
	placeholder
}: props<T>) {
	return (
		<Textarea
			placeholder={placeholder}
			value={eventOptions?.value}
			onInput={eventOptions?.onInput}
			id={id}
			{...register(registerOptions.inputName, {
				required: registerOptions.required,
				pattern: registerOptions?.pattern,
				validate: registerOptions?.validate,
			})}
		/>
	)
}

export default TextareaField
