import { FC } from 'react'

import { IGamesPageResponse } from '@appTypes/gamesPage.types'
import { IBgImage } from '@appTypes/base.types'
import { MainHead } from '@components/layout'
import {
  ContentHeader,
  ContentWrapper,
  ContentInfiniteScroll,
} from '@components/content'
import { CardGame } from '@components/cards'
import { FilterBlock } from '@components/shared'
import { ContentRows, InfoText } from '@styles/components/content.components'

interface IGamesContentProps
  extends Omit<IGamesPageResponse, 'background_image'> {
  getNextPage: () => void
  nextPageError: boolean
  bgImage: IBgImage
}

const GamesContent: FC<IGamesContentProps> = ({
  title,
  description,
  games_count,
  games_list,
  getNextPage,
  next_page,
  nextPageError,
  bgImage,
}) => {
  return (
    <>
      <MainHead title={title} description={description} />
      <ContentHeader image={bgImage.image} blurDataURL={bgImage.blurDataURL} />

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
