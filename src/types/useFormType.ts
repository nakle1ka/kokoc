import { Path } from "react-hook-form"



type pattern = {
	value: RegExp
	message: string
}
export type registerOptions<T> = {
	inputName:Path<T>
	required?: string
	pattern?: pattern
	validate?: (arg: string) => string
}