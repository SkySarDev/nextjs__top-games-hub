import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { ROUTES } from '@constants/routes.constants'
import { NAVBAR_LIST } from '@constants/navbar.constants'
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

      <div>
        <BurgerMenu>MENU</BurgerMenu>
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
      </div>
    </Wrapper>
  )
}

export default HeaderNavbar

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
  max-width: 430px;
  width: calc(100% - 20px);
  height: 50px;
  background-color: #1b1b1b;
  z-index: 1000;

  @media (min-width: 768px) {
    max-width: 850px;
    width: calc(100% - 30px);
  }

  @media (min-width: 1080px) {
    max-width: 1160px;
    width: calc(100% - 40px);
  }

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
const BurgerMenu = styled.div`
  @media (min-width: 1080px) {
    display: none;
  }
`
const NavList = styled.ul`
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
