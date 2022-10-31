import styled from 'styled-components'

import { NavList } from '@components/header/index'

const NavMenu = () => {
  return (
    <List>
      <NavList />
    </List>
  )
}

export default NavMenu

const List = styled.ul`
  display: none;

  @media (min-width: 1080px) {
    display: flex;
    align-items: center;
    height: 100%;

    a {
      font-size: 18px;
      color: #b3b1a9;
    }
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 8px;
    height: 35px;
    transition: background-color 0.3s;

    :hover,
    &.active {
      background-color: rgba(226, 224, 208, 0.2);
    }
  }
`
