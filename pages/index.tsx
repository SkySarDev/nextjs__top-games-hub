import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { ROUTES } from '@constants/routes.constants'
import {
  CardCommonsListWithData,
  CardGamesListWithData,
} from '@components/cards'
import { ContentHeader, ContentWrapper } from '@components/content'
import { MainHead } from '@components/layout'
import { HomePageSection } from '@components/pages/home'
import { ContentRows } from '@styles/components/content.components'

const Home: NextPage = () => {
  const { data } = useQuery(['home-page'], PagesServices.getHome)

  return (
    <>
      <MainHead
        title="Home"
        description="Top Games Hub is a video game database with over 700,000 games!"
      />

      <ContentHeader />

      <ContentWrapper title="Home page">
        <ContentRows>
          {data && (
            <>
              <HomePageSection title="Top games of year" link={ROUTES.GAMES}>
                <CardGamesListWithData list={data.topGames} />
              </HomePageSection>

              <HomePageSection
                title="New releases"
                link={ROUTES.RELEASE_CALENDAR}
              >
                <CardGamesListWithData list={data.newReleases} />
              </HomePageSection>

              <HomePageSection title="Popular genres" link={ROUTES.GENRES}>
                <CardCommonsListWithData
                  list={data.popularGenres}
                  category="genres"
                />
              </HomePageSection>

              <HomePageSection title="Tags" link={ROUTES.TAGS}>
                <CardCommonsListWithData list={data.tags} category="tags" />
              </HomePageSection>
            </>
          )}
        </ContentRows>
      </ContentWrapper>
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  return customFetchQuery(['home-page'], PagesServices.getHome)
}
