import { useEffect } from 'react'

export const useCssLazyLoadingImage = () => {

	useEffect(() => {

		document.addEventListener('DOMContentLoaded', function () {

			if ('IntersectionObserver' in window) {

				const lazyloadImages = document.querySelectorAll('.lazy')

				const imageObserver = new IntersectionObserver(function (entries, observer) {
					entries.forEach(function (entry) {
						if (entry.isIntersecting) {
							const image = entry.target
							image.classList.remove('lazy')
							imageObserver.unobserve(image)
						}
					})
				})

				lazyloadImages.forEach(function (image) {
					imageObserver.observe(image)
				})
			} 

			else {

				const lazyloadImages = document.querySelectorAll('.lazy')

				const lazyload = () => {

					const lazyloadThrottleTimeout = setTimeout(function () {

						const scrollTop = window.pageYOffset

						lazyloadImages.forEach(img =>  {

							if (img.offsetTop < (window.innerHeight + scrollTop)) {
								img.src = img.dataset.src
								img.classList.remove('lazy')
							}
							
						})

						if (lazyloadImages.length === 0) {
							document.removeEventListener('scroll', lazyload)
							window.removeEventListener('resize', lazyload)
							window.removeEventListener('orientationChange', lazyload)
						}

					}, 20)

					if (lazyloadThrottleTimeout) {
						clearTimeout(lazyloadThrottleTimeout)
					}

				}

				document.addEventListener('scroll', lazyload)
				window.addEventListener('resize', lazyload)
				window.addEventListener('orientationChange', lazyload)
			}
		})

	}, [])

}
