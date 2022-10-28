import { FC } from 'react'

import { ICardGame } from '@appTypes/cards.types'
import { ContentInfiniteScroll } from '@components/content'
import { CardGame } from '@components/cards'
import {
  BlockWrapper,
  ContentRows,
  InfoText,
} from '@styles/components/content.components'

interface IGamesContentProps {
  gamesList: ICardGame[]
  nextPage: string | null
  getNextPage: () => void
  nextPageError: boolean
}

const GamesContent: FC<IGamesContentProps> = ({
  gamesList,
  getNextPage,
  nextPage,
  nextPageError,
}) => {
  return (
    <BlockWrapper>
      <ContentRows>
        {!gamesList.length ? (
          <InfoText>No games found</InfoText>
        ) : (
          <ContentInfiniteScroll
            getNextPage={getNextPage}
            nextPage={nextPage}
            nextPageError={nextPageError}
            dataLength={gamesList.length}
          >
            {gamesList.map((game) => (
              <CardGame data={game} key={game.name} />
            ))}
          </ContentInfiniteScroll>
        )}
      </ContentRows>
    </BlockWrapper>
  )
}

export default GamesContent
