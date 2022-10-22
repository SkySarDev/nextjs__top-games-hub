import { FC } from 'react'
import { ROUTES } from '@constants/routes.constants'
import { BlockWrapper } from '@components/shared'
import { HomeSection } from '@components/pages/home'
import {
  CardGamesListWithData,
  CardCommonsListWithData,
} from '@components/cards'
import { ContentRows } from '@styles/components/content.components'
import { ICardGame, ICardCommon } from '@appTypes/cards.types'

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
    <BlockWrapper>
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

        <HomeSection title="GamesTags" link={ROUTES.TAGS}>
          <CardCommonsListWithData list={tags} category="tags" />
        </HomeSection>
      </ContentRows>
    </BlockWrapper>
  )
}

export default HomeContent
