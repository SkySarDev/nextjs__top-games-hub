import { FC } from 'react'

import { IGamesDto } from '@appTypes/gamesPage.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentMain } from '@components/content'
import { CardGame } from '@components/cards'
import { FilterBlock } from '@components/shared'
import { ContentGrid, ContentRows } from '@styles/components/content.components'

interface IGamesContentProps {
  gamesData: IGamesDto
}

const GamesContent: FC<IGamesContentProps> = ({
  gamesData: { background_image, games_count, games },
}) => {
  return (
    <>
      <MainHead
        title="Games"
        description="Top Games Hub. List of video games."
      />

      <ContentHeader image={background_image} />

      <ContentMain title="Games">
        <ContentRows>
          <FilterBlock gamesCount={games_count} />

          <ContentGrid>
            {games.map((game) => (
              <CardGame data={game} key={game.name} />
            ))}
          </ContentGrid>
        </ContentRows>
      </ContentMain>
    </>
  )
}

export default GamesContent
