import styled from 'styled-components'

import { useActiveClass } from '@hooks/useActiveClass'
import { NavList } from '@components/header/index'

const BurgerMenu = () => {
  const { isActive, toggleActiveClass } = useActiveClass('active', true)

  return (
    <Wrapper>
      <BurgerBtn className={isActive} onClick={toggleActiveClass} />
      <List className={isActive}>
        <NavList />
      </List>
    </Wrapper>
  )
}

export default BurgerMenu

const Wrapper = styled.div`
  position: relative;

  @media (min-width: 1080px) {
    display: none;
  }
`

const BurgerBtn = styled.button`
  position: relative;
  width: 25px;
  height: 20px;
  background: transparent;
  border-top: 3px solid;
  border-bottom: 3px solid;
  color: #b3b1a9;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  :before,
  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    top: 50%;
    left: 50%;
    background: #b3b1a9;
    transform: translate(-50%, -50%);
    transition: transform 0.25s;
  }

  &.active {
    border-color: transparent;

    :before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    :after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`
const List = styled.ul`
  position: absolute;
  right: 0;
  top: 55px;
  background-color: #1b1b1b;
  max-height: 0;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  &.active {
    height: auto;
    max-height: 350px;
    box-shadow: 0 10px 15px 20px rgba(27, 27, 27, 0.5);
  }

  a {
    font-size: 20px;
    color: #b3b1a9;
  }

  @media (min-width: 1080px) {
    display: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 35px;
    text-align: center;
    transition: background-color 0.3s;

    :hover,
    &.active {
      background-color: rgba(226, 224, 208, 0.2);
    }
  }
`
