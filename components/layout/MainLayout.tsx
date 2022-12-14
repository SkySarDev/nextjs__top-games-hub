import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

import { IBgImage } from '@appTypes/base.types'
import { MainHead, Footer, ButtonToTop } from '@components/layout'
import { HeaderNavbar, Hero, HeroBackground } from '@components/header'

interface IMainLayoutProps extends PropsWithChildren {
  title?: string
  description?: string
  bgImage?: IBgImage
}

const MainLayout: FC<IMainLayoutProps> = ({
  title,
  description,
  bgImage,
  children,
}) => {
  return (
    <>
      <MainHead title={title} description={description} />

      <Container>
        <HeaderNavbar />
        <HeroBackground
          image={bgImage?.image}
          blurDataURL={bgImage?.blurDataURL}
        />
        <Hero title={title} />

        {children}

        <Footer />
      </Container>

      <ButtonToTop />
    </>
  )
}

export default MainLayout

const Container = styled.div`
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  padding: 0 10px;

  @media (min-width: 768px) {
    max-width: 880px;
    padding: 0 15px;
  }

  @media (min-width: 1080px) {
    max-width: 1200px;
    padding: 0 20px;
  }
`
