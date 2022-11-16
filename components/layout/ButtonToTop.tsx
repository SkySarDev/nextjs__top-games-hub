import styled from 'styled-components'
import { BiUpArrowAlt } from 'react-icons/bi'

import { useScrollPosition } from '@hooks/useScrollPosition'

const ButtonToTop = () => {
  const { scrollPosition } = useScrollPosition(200)
  const isActive = scrollPosition > 400 ? 'active' : ''

  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button onClick={onClickHandler} className={isActive}>
      <BiUpArrowAlt />
    </Button>
  )
}

export default ButtonToTop

const Button = styled.button`
  position: fixed;
  right: 15px;
  bottom: 15px;
  padding: 5px;
  font-size: 30px;
  line-height: 0;
  background-color: #1b1b1b;
  color: #6f6e64;
  border: 1px solid #59584c;
  border-radius: 50%;
  box-shadow: 0 0 10px 3px rgba(111, 110, 100, 0.2);
  opacity: 0;
  transition: opacity 0.35s ease;
  cursor: pointer;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }

  @media (min-width: 640px) {
    right: 30px;
    bottom: 30px;
  }

  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 1400px) {
    right: calc((100vw - 1200px) / 2 - 70px);
  }
`
