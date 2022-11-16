import { useState, useEffect, useRef } from 'react'

export const useScrollPosition = (delay: number) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const debounce = useRef<null | NodeJS.Timeout>(null)

  useEffect(() => {
    const updatePosition = () => {
      if (debounce.current) {
        clearTimeout(debounce.current)
      }

      debounce.current = setTimeout(() => {
        setScrollPosition(window.scrollY)
      }, delay)
    }

    window.addEventListener('scroll', updatePosition)

    return () => {
      window.removeEventListener('scroll', updatePosition)
    }
  }, [delay])

  return { scrollPosition }
}
