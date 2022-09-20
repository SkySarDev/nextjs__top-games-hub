import React, { FC } from 'react'

import { ISearchContentResponse } from '@appTypes/pages.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentWrapper } from '@components/content'
import { FilterBlock } from '@components/shared'
import { SkeletonCardsCreator, CardGameSkeleton } from '@components/cards'
import { GamesList } from '@components/pages/common'
import { ContentRows, ContentGrid } from '@styles/components/content.components'

interface ISearchContentProps {
  isLoading: boolean
  searchText: string
  data?: ISearchContentResponse
}

const SearchContent: FC<ISearchContentProps> = ({
  isLoading,
  searchText,
  data,
}) => {
  const title = `Search results for: ${searchText}`

  return (
    <>
      <MainHead title={title} />
      <ContentHeader />

      <ContentWrapper title={title}>
        <ContentRows>
          <FilterBlock gamesCount={data?.games_count} />

          {isLoading ? (
            <ContentGrid>
              <SkeletonCardsCreator
                length={9}
                CardsComponent={CardGameSkeleton}
              />
            </ContentGrid>
          ) : (
            <GamesList games_list={data?.games_list} />
          )}
        </ContentRows>
      </ContentWrapper>
    </>
  )
}

export default SearchContent
