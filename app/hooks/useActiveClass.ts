import { useState } from 'react'

export const useActiveClass = (className = 'active', bodyListener = false) => {
  const [isActive, setIsActive] = useState('')

  const removeActiveClass = () => {
    setIsActive('')

    if (bodyListener) {
      document.body.removeEventListener('click', removeActiveClass)
    }
  }

  const addActiveClass = () => {
    setIsActive(className)

    if (bodyListener) {
      setTimeout(() => {
        document.body.addEventListener('click', removeActiveClass)
      })
    }
  }

  const toggleActiveClass = () => {
    isActive ? removeActiveClass() : addActiveClass()
  }

  return {
    isActive,
    addActiveClass,
    removeActiveClass,
    toggleActiveClass,
  }
}
