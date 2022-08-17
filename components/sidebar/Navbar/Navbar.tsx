import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { NAVBAR_LIST } from '@constants/navbar.constants'
import { BlockWrapper } from '@components/ui'

const NavList = styled.ul`
  width: 160px;
  margin: 0 auto;
  text-align: left;
`
const NavItem = styled.li`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  column-gap: 10px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  a {
    font-size: 24px;
    color: #e2e0d0;
    transition: color 0.3s;

    &.active,
    &:hover {
      color: #999999;
    }
  }
`
const NavIcon = styled(Image)`
  opacity: 0.7;
`

const Navbar: NextPage = () => {
  return (
    <BlockWrapper>
      <NavList>
        {NAVBAR_LIST.map((navItem) => {
          const { link, name, icon } = navItem

          return (
            <NavItem key={name}>
              <NavIcon src={icon} alt={name} width={30} height={30} />
              <Link href={link}>{name}</Link>
            </NavItem>
          )
        })}
      </NavList>
    </BlockWrapper>
  )
}

export default Navbar
