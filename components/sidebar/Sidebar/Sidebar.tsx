import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { ROUTES } from '@constants/routes.constants'
import { Navbar, SearchBlock } from '@components/sidebar'
import logo from '@public/images/logo.png'

const Sidebar: FC = () => {
  return (
    <div>
      <SidebarWrapper>
        <Link href={ROUTES.ROOT}>
          <>
            <Logo src={logo} width={200} height={200} alt="Top Index Hub" />
          </>
        </Link>
        <SearchBlock />
        <Navbar />
      </SidebarWrapper>
    </div>
  )
}

export default Sidebar

const SidebarWrapper = styled.div`
  position: sticky;
  top: 15px;
  text-align: center;
`
const Logo = styled(Image)`
  opacity: 0.8;
  cursor: pointer;
`
