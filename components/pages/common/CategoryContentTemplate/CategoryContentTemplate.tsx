import { FC } from 'react'

import { ICategoryContentResponse } from '@appTypes/pages.types'
import { IBgImage } from '@appTypes/base.types'
import { MainHead } from '@components/layout'
import {
  ContentHeader,
  ContentWrapper,
  ContentSection,
  ContentInfiniteScroll,
} from '@components/content'
import { FilterBlock } from '@components/shared'
import { CardGame } from '@components/cards'
import { ContentRows, InfoText } from '@styles/components/content.components'

interface ICategoryContentTemplateProps
  extends Omit<ICategoryContentResponse, 'background_image'> {
  getNextPage: () => void
  nextPageError: boolean
  bgImage: IBgImage
}

const CategoryContentTemplate: FC<ICategoryContentTemplateProps> = ({
  title,
  description,
  description_raw,
  games_count,
  games_list,
  getNextPage,
  next_page,
  nextPageError,
  bgImage,
}) => {
  return (
    <>
      <MainHead title={title} description={description_raw} />
      <ContentHeader image={bgImage.image} blurDataURL={bgImage.blurDataURL} />

      <ContentWrapper title={title}>
        <ContentRows>
          {description && (
            <ContentSection title="Description">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </ContentSection>
          )}

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

export default CategoryContentTemplate
