/**
 * @author Jorge Salgado
 * @version 1.0.0
 * @name useField
 * @package @jorge-salgado/common-react-hooks
 * @param {String} name
 * @param {String} placeholder
 * @param {String} type
 * @param {Boolean} set
 */
import { useState } from 'react'

export const useField = (name='', placeholder='', type='', set=false) => {

	const [value, setValue] = useState('')

	const onChange = event => {
		setValue(event.target.value)
	}

	if (set && type !== '') {

		return {
			name,
			placeholder,
			type,
			value,
			setValue,
			onChange,
		}

	}

	if (type !== '') {

		return {
			name,
			placeholder,
			type,
			value,
			onChange,
		}

	}

	return {
		name,
		placeholder,
		value,
		onChange,
	}

}
