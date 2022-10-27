import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

import { IBgImage } from '@appTypes/base.types'
import { MainHead } from '@components/layout/index'
import { HeaderNavbar, Hero, HeroBackground } from '@components/header'
import { GameScreenshotModal } from '@components/pages/games'

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

      <GameScreenshotModal />
    </>
  )
}

export default MainLayout

const Container = styled.div`
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  padding: 0 10px 10px;

  @media (min-width: 768px) {
    max-width: 880px;
    padding: 0 15px 15px;
  }

  @media (min-width: 1080px) {
    max-width: 1200px;
    padding: 0 20px 20px;
  }
`
