import React, { FC } from 'react'

import { ICardGame } from '@appTypes/cards.types'
import { CardGame } from '@components/cards'
import { ContentGrid, InfoText } from '@styles/components/content.components'

interface IGamesListProps {
  games_list?: ICardGame[]
}

const GamesList: FC<IGamesListProps> = ({ games_list }) => {
  return (
    <>
      {!games_list?.length ? (
        <InfoText>No search results</InfoText>
      ) : (
        <ContentGrid>
          {games_list.map((gameItem) => (
            <CardGame data={gameItem} key={gameItem.name} />
          ))}
        </ContentGrid>
      )}
    </>
  )
}

export default GamesList
