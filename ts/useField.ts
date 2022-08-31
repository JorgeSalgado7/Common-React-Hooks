/**
 * @author Jorge Salgado
 * @version 1.0.0
 * @name useField
 * @package @jorge-salgado/common-react-hooks
 * @param {String} name
 * @param {String} placeholder
 * @param {String} type
 */
import React, { useState } from 'react'

export const useField = (name = '', placeholder = '', type = 'text') => {

	const [value, setValue] = useState('')

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return {
		name,
		placeholder,
		type,
		value,
		onChange,
	}

}
