import { FC } from 'react'
import { ROUTES } from '@constants/routes.constants'

import { ICardGame, ICardCommon } from '@appTypes/cards.types'
import { HomeSection } from '@components/pages/home'
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

const HomeContent: FC<IHomeContentProps> = ({
  topGames,
  newReleases,
  popularGenres,
  tags,
}) => {
  return (
    <ContentWrapper>
      <ContentRows>
        <HomeSection title="Top games" link={ROUTES.GAMES}>
          <CardGamesListWithData list={topGames} />
        </HomeSection>

        <HomeSection title="New releases" link={ROUTES.RELEASE_CALENDAR}>
          <CardGamesListWithData list={newReleases} />
        </HomeSection>

        <HomeSection title="Popular genres" link={ROUTES.GENRES}>
          <CardCommonsListWithData list={popularGenres} category="genres" />
        </HomeSection>

        <HomeSection title="Games tags" link={ROUTES.TAGS}>
          <CardCommonsListWithData list={tags} category="tags" />
        </HomeSection>
      </ContentRows>
    </ContentWrapper>
  )
}

export default HomeContent
