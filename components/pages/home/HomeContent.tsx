import { FC } from 'react'
import { ROUTES } from '@constants/routes.constants'

import { ICardGame, ICardCommon } from '@appTypes/cards.types'
import { HomeSection } from '@components/pages/home/index'
import {
  CardGamesListWithData,
  CardCommonsListWithData,
} from '@components/cards'
import { ContentWrapper } from '@components/content'
import { ContentRows } from '@styles/components/content.components'

interface IHomeContentProps {
  topGames: ICardGame[]
  newReleases: ICardGame[]
  popularGenres: ICardCommon[]
  tags: ICardCommon[]
}

const { GAMES, RELEASE_CALENDAR, GENRES, TAGS } = ROUTES

const HomeContent: FC<IHomeContentProps> = ({
  topGames,
  newReleases,
  popularGenres,
  tags,
}) => {
  return (
    <ContentWrapper>
      <ContentRows>
        <HomeSection title="Top games" link={GAMES}>
          <CardGamesListWithData list={topGames} />
        </HomeSection>

        <HomeSection title="New releases" link={RELEASE_CALENDAR}>
          <CardGamesListWithData list={newReleases} />
        </HomeSection>

        <HomeSection title="Popular genres" link={GENRES}>
          <CardCommonsListWithData list={popularGenres} category="genres" />
        </HomeSection>

        <HomeSection title="Games tags" link={TAGS}>
          <CardCommonsListWithData list={tags} category="tags" />
        </HomeSection>
      </ContentRows>
    </ContentWrapper>
  )
}

export default HomeContent
