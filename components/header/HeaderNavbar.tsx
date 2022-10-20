import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { NAVBAR_LIST } from '@constants/navbar.constants'
import { ROUTES } from '@constants/routes.constants'
import logo from '@public/images/logo.png'

interface IHeaderNavbarProps {
  pathname?: string
}

const HeaderNavbar: FC<IHeaderNavbarProps> = ({ pathname }) => {
  return (
    <Wrapper>
      <Link href={ROUTES.ROOT}>
        <a>
          <Image src={logo} width={200} height={40} alt="Top Games Hub" />
        </a>
      </Link>

      <NavList>
        {NAVBAR_LIST.map(({ link, name }) => (
          <Link href={link} key={name}>
            <a>
              <NavItem className={`${pathname === link ? 'active' : ''}`}>
                {name}
              </NavItem>
            </a>
          </Link>
        ))}
      </NavList>
    </Wrapper>
  )
}

export default HeaderNavbar

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1160px;
  height: 50px;
  background-color: #1b1b1b;
  z-index: 1000;

  :after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -20px;
    height: 20px;
    background-image: linear-gradient(
      0deg,
      rgba(27, 27, 27, 0) 0%,
      rgba(27, 27, 27, 0.8) 100%
    );
  }
`
const NavList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;

  a {
    font-size: 18px;
    color: #b3b1a9;
  }
`
const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 35px;
  transition: background-color 0.3s;

  :hover,
  &.active {
    background-color: rgba(226, 224, 208, 0.2);
  }
`
