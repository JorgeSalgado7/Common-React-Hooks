export function useLocalStorage(){

	const setStorageValue = (key: string, value: string) => {
		window.localStorage.setItem(key, JSON.stringify(value))
	}

	const getStorageValue = (key: string) => {
		return JSON.parse(window.localStorage.getItem(key) ?? '')
	}

	const deleteStorageValue = (key: string) => {
		window.localStorage.removeItem(key)
	}

	return {
		setStorageValue, 
		getStorageValue,
		deleteStorageValue,
	}

}
