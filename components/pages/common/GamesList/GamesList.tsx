import React, { FC } from 'react'

import { ICardGame } from '@appTypes/cards.types'
import { CardGame } from '@components/cards'
import { ContentInfiniteScroll } from '@components/content'
import { InfoText } from '@styles/components/content.components'

interface IGamesListProps {
  gamesList: ICardGame[]
  getNextPage: () => void
  nextPage: string | null
  nextPageError: boolean
}

const GamesList: FC<IGamesListProps> = ({
  gamesList,
  nextPage,
  nextPageError,
  getNextPage,
}) => {
  return (
    <>
      {!gamesList.length ? (
        <InfoText>No search results</InfoText>
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
    </>
  )
}

export default GamesList
