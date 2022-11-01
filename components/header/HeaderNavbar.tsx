import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { BurgerMenu, NavMenu, SearchNavbar } from '@components/header'
import logo from '@public/images/logo.png'

const HeaderNavbar: FC = () => {
  return (
    <Wrapper>
      <div>
        <Link href="/">
          <a>
            <Image
              src={logo}
              width={200}
              height={40}
              quality={100}
              alt="Top Games Hub"
            />
          </a>
        </Link>
      </div>

      <SearchNavbar />
      <BurgerMenu />
      <NavMenu />
    </Wrapper>
  )
}

export default HeaderNavbar

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto auto;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;
  max-width: 440px;
  width: calc(100% - 20px);
  height: 50px;
  background-color: #1b1b1b;
  z-index: 1000;

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;
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
