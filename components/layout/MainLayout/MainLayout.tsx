import type { NextPage } from 'next'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { Sidebar } from '@components/sidebar'

const Container = styled.div`
  max-width: 1440px;
  padding: 15px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 1200px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 270px minmax(880px, auto);
  column-gap: 20px;
`

interface IMainLayoutProps {
  children: ReactNode
}

const MainLayout: NextPage<IMainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Grid>
        <Sidebar />
        <div>{children}</div>
      </Grid>
    </Container>
  )
}

export default MainLayout
