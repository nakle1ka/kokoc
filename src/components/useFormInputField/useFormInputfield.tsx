import cl from './style/useFromInputLabel.module.scss'
import { Input } from '@/components/ui/input'
import { UseFormRegister } from 'react-hook-form'
import { registerOptions } from '@/types/useFormType'
import { ChangeEvent } from 'react'


type props<T extends object> = {
	registerOptions: registerOptions<T>
	inputError?: string | undefined
	watchLabel: (arg: string) => string
	register: UseFormRegister<T>
	id?: string
	eventOptions?: {
		onInput: (e: ChangeEvent<HTMLInputElement>) => void
		value: string
	}
}

function InputField<T extends object>({
	register,
	registerOptions,
	inputError,
	watchLabel,
	id,
	eventOptions,
}: props<T>) {
	return (
		<div className={cl.relative_container}>
			<Input
				value={eventOptions?.value}
				
				onInput={eventOptions?.onInput }
				id={`${registerOptions.inputName} ${id}`}
				className={`${cl.input} ${inputError ? cl.invalid_value : ''}`}
				{...register(registerOptions.inputName, {
					required: registerOptions.required,
					pattern: registerOptions?.pattern,
					validate: registerOptions?.validate,
				})}
			/>
			<label
				htmlFor={registerOptions.inputName}
				className={`${cl.label} ${
					watchLabel(registerOptions.inputName) ? cl.onFocus : ''
				}`}
			>
				{registerOptions.inputName}
			</label>
		</div>
	)
}

export default InputField
