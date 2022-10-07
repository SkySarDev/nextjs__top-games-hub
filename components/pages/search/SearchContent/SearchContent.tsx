import React, { FC } from 'react'

import { ICardGame } from '@appTypes/cards.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentWrapper } from '@components/content'
import { FilterBlock } from '@components/shared'
import { SkeletonCardsCreator, CardGameSkeleton } from '@components/cards'
import { GamesList } from '@components/pages/common'
import { ContentRows, ContentGrid } from '@styles/components/content.components'

interface ISearchContentProps {
  isLoading: boolean
  searchText: string
  gamesCount: number
  gamesList: ICardGame[]
  nextPage: string | null
  nextPageError: boolean
  getNextPage: () => void
}

const SearchContent: FC<ISearchContentProps> = ({
  isLoading,
  searchText,
  gamesCount,
  gamesList,
  nextPage,
  nextPageError,
  getNextPage,
}) => {
  const title = `Search results for: ${searchText}`

  return (
    <>
      <MainHead title={title} />
      <ContentHeader />

      <ContentWrapper title={title}>
        <ContentRows>
          <FilterBlock gamesCount={gamesCount} />

          {isLoading ? (
            <ContentGrid>
              <SkeletonCardsCreator
                length={9}
                CardsComponent={CardGameSkeleton}
              />
            </ContentGrid>
          ) : (
            <GamesList
              gamesList={gamesList}
              nextPage={nextPage}
              nextPageError={nextPageError}
              getNextPage={getNextPage}
            />
          )}
        </ContentRows>
      </ContentWrapper>
    </>
  )
}

export default SearchContent
