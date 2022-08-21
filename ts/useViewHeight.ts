import { useEffect } from 'react'

export const useViewheight = () => {

	useEffect(() => {
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)

		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		})

	}, [])
  
  //height: 100vh; //FAllback height in css
	//height: calc(var(--vh, 1vh) * 100); //calc height

}
