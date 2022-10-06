import { FC } from 'react'

import { IGamesPageResponse } from '@appTypes/gamesPage.types'
import { MainHead } from '@components/layout'
import {
  ContentHeader,
  ContentWrapper,
  ContentInfiniteScroll,
} from '@components/content'
import { CardGame } from '@components/cards'
import { FilterBlock } from '@components/shared'
import { ContentRows, InfoText } from '@styles/components/content.components'

interface IGamesContentProps extends IGamesPageResponse {
  getNextPage: () => void
  nextPageError: boolean
}

const GamesContent: FC<IGamesContentProps> = ({
  title,
  description,
  background_image,
  games_count,
  games_list,
  getNextPage,
  next_page,
  nextPageError,
}) => {
  return (
    <>
      <MainHead title={title} description={description} />
      <ContentHeader image={background_image} />

      <ContentWrapper title={title}>
        <ContentRows>
          <FilterBlock gamesCount={games_count} />

          {!games_list.length ? (
            <InfoText>No games found</InfoText>
          ) : (
            <ContentInfiniteScroll
              getNextPage={getNextPage}
              nextPage={next_page}
              nextPageError={nextPageError}
              dataLength={games_list.length}
            >
              {games_list.map((game) => (
                <CardGame data={game} key={game.name} />
              ))}
            </ContentInfiniteScroll>
          )}
        </ContentRows>
      </ContentWrapper>
    </>
  )
}

export default GamesContent
