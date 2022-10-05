import { FC } from 'react'

import { ICategoryListResponse, PageCategories } from '@appTypes/pages.types'
import { MainHead } from '@components/layout'
import {
  ContentHeader,
  ContentWrapper,
  ContentInfiniteScroll,
} from '@components/content'
import { CardCommon } from '@components/cards'
import { ContentRows, InfoText } from '@styles/components/content.components'

interface ICategoryListTemplateProps extends ICategoryListResponse {
  category: PageCategories
  getNextPage: () => void
  next_page: string | null
  nextPageError: boolean
}

const CategoryListTemplate: FC<ICategoryListTemplateProps> = ({
  category,
  title,
  description,
  background_image,
  list,
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
          {!list.length ? (
            <InfoText>Nothing found</InfoText>
          ) : (
            <ContentInfiniteScroll
              getNextPage={getNextPage}
              next_page={next_page}
              nextPageError={nextPageError}
              dataLength={list.length}
            >
              {list.map((item) => (
                <CardCommon data={item} category={category} key={item.id} />
              ))}
            </ContentInfiniteScroll>
          )}
        </ContentRows>
      </ContentWrapper>
    </>
  )
}

export default CategoryListTemplate
