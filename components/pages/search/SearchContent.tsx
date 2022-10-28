import React, { FC } from 'react'

import { ICardGame } from '@appTypes/cards.types'
import { SkeletonCardsCreator, CardGameSkeleton } from '@components/cards'
import { GamesList } from '@components/pages/common'
import {
  BlockWrapper,
  ContentGrid,
} from '@styles/components/content.components'

interface ISearchContentProps {
  isLoading: boolean
  gamesList: ICardGame[]
  nextPage: string | null
  nextPageError: boolean
  getNextPage: () => void
}

const SearchContent: FC<ISearchContentProps> = ({
  isLoading,
  gamesList,
  nextPage,
  nextPageError,
  getNextPage,
}) => {
  return (
    <BlockWrapper>
      {isLoading ? (
        <ContentGrid>
          <SkeletonCardsCreator length={15} CardsComponent={CardGameSkeleton} />
        </ContentGrid>
      ) : (
        <GamesList
          gamesList={gamesList}
          nextPage={nextPage}
          nextPageError={nextPageError}
          getNextPage={getNextPage}
        />
      )}
    </BlockWrapper>
  )
}

export default SearchContent
