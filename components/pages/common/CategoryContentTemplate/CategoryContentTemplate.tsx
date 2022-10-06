import { FC } from 'react'

import { ICategoryContentResponse } from '@appTypes/pages.types'
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

interface ICategoryContentTemplateProps extends ICategoryContentResponse {
  getNextPage: () => void
  nextPageError: boolean
}

const CategoryContentTemplate: FC<ICategoryContentTemplateProps> = ({
  title,
  description,
  description_raw,
  background_image,
  games_count,
  games_list,
  getNextPage,
  next_page,
  nextPageError,
}) => {
  return (
    <>
      <MainHead title={title} description={description_raw} />
      <ContentHeader image={background_image} />

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
