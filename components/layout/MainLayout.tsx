import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

import { IBgImage } from '@appTypes/base.types'
import { MainHead } from '@components/layout/index'
import { HeaderNavbar, Hero, HeroBackground } from '@components/header'

interface IMainLayoutProps extends PropsWithChildren {
  title?: string
  description?: string
  bgImage?: IBgImage
  pathname?: string
}

const MainLayout: FC<IMainLayoutProps> = ({
  title,
  description,
  bgImage,
  pathname,
  children,
}) => {
  return (
    <>
      <MainHead title={title} description={description} />

      <Container>
        <HeaderNavbar pathname={pathname} />
        <HeroBackground
          image={bgImage?.image}
          blurDataURL={bgImage?.blurDataURL}
        />
        <Hero title={title} />

        {children}
      </Container>
    </>
  )
}

export default MainLayout

const Container = styled.div`
  max-width: 1200px;
  padding: 0 20px 20px;
  margin: 0 auto;
`
