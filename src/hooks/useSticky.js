// https://www.ibrahima-ndaw.com/blog/build-a-sticky-nav-with-react/
import { useEffect, useState, useRef } from "react"

function useSticky() {
	const [ isSticky, setSticky ] = useState(false)
	const element = useRef(null)

	const handleScroll = () => {
		if (window.scrollY === 0) {
			setSticky(false)
		} else {
			window.scrollY > element.current.getBoundingClientRect().bottom ? setSticky(true) : setSticky(false);
		}
	}


	const debounce = (func, wait = 5, immediate = true) => {
		let timeOut
		return () => {
			let context = this
			let args = arguments
			const later = () => {
				timeOut = null
				if (!immediate) func.apply(context, args)
			}
			const callNow = immediate && !timeOut
			clearTimeout(timeOut)
			timeOut = setTimeout(later, wait)
			if (callNow) func.apply(context, args)
		}
	}

	useEffect( () => {
		window.addEventListener("scroll", debounce(handleScroll))
		return () => {
			window.removeEventListener("scroll", () => handleScroll)
		}
	}, [debounce, handleScroll])

	return { isSticky, element }
}

export default useSticky