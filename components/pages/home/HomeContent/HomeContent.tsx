import { FC } from 'react'

import { IHomePageResponse } from '@appTypes/homePage.types'
import { IBgImage } from '@appTypes/base.types'
import { ROUTES } from '@constants/routes.constants'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentWrapper } from '@components/content'
import { HomeSection } from '@components/pages/home'
import {
  CardGamesListWithData,
  CardCommonsListWithData,
} from '@components/cards'
import { ContentRows } from '@styles/components/content.components'

interface IHomeContentProps {
  data: IHomePageResponse
  bgImage: IBgImage
}

const HomeContent: FC<IHomeContentProps> = ({
  data: { title, description, top_games, new_releases, popular_genres, tags },
  bgImage,
}) => {
  return (
    <>
      <MainHead title={title} description={description} />
      <ContentHeader image={bgImage.image} blurDataURL={bgImage.blurDataURL} />

      <ContentWrapper title={title}>
        <ContentRows>
          <HomeSection title="Top games of year" link={ROUTES.GAMES}>
            <CardGamesListWithData list={top_games} />
          </HomeSection>

          <HomeSection title="New releases" link={ROUTES.RELEASE_CALENDAR}>
            <CardGamesListWithData list={new_releases} />
          </HomeSection>

          <HomeSection title="Popular genres" link={ROUTES.GENRES}>
            <CardCommonsListWithData list={popular_genres} category="genres" />
          </HomeSection>

          <HomeSection title="Tags" link={ROUTES.TAGS}>
            <CardCommonsListWithData list={tags} category="tags" />
          </HomeSection>
        </ContentRows>
      </ContentWrapper>
    </>
  )
}

export default HomeContent
