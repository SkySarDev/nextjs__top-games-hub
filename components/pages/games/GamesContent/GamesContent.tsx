import { FC } from 'react'

import { IGamesPageResponse } from '@appTypes/gamesPage.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentWrapper } from '@components/content'
import { CardGame } from '@components/cards'
import { FilterBlock } from '@components/shared'
import { ContentGrid, ContentRows } from '@styles/components/content.components'

interface IGamesContentProps {
  data: IGamesPageResponse
}

const GamesContent: FC<IGamesContentProps> = ({
  data: { title, description, background_image, games_count, games_list },
}) => {
  return (
    <>
      <MainHead title={title} description={description} />

      <ContentHeader image={background_image} />

      <ContentWrapper title={title}>
        <ContentRows>
          <FilterBlock gamesCount={games_count} />

          <ContentGrid>
            {games_list.map((game) => (
              <CardGame data={game} key={game.name} />
            ))}
          </ContentGrid>
        </ContentRows>
      </ContentWrapper>
    </>
  )
}

export default GamesContent
