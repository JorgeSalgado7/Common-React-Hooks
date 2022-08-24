import { useEffect } from 'react'

/**
 * @author Jorge Salgado
 * @version 1.0.0
 * @name useAuth
 * @package @jorge-salgado/common-react-hooks
 * @param {String} key
 * @param {String} redirectionURL
 */

export const useAuth = (key, redirectionURL = '/') => {

	useEffect(() => {
		const token = window.localStorage.getItem(key)
		if (token === null || token === undefined || token === '') {
			window.location.href = redirectionURL
		}
	}, [])

}

