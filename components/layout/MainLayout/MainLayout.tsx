import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

import { HeaderNavbar } from '@components/layout'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      {children}

      <HeaderNavbar />
    </Container>
  )
}

export default MainLayout

const Container = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`
