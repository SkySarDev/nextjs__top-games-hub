import { FC } from 'react'

import { ICategoryListResponse, PageCategories } from '@appTypes/pages.types'
import { MainHead } from '@components/layout'
import {
  ContentWrapper,
  ContentInfiniteScroll,
  ContentHeader,
} from '@components/content'
import { CardCommon } from '@components/cards'
import { ContentRows, InfoText } from '@styles/components/content.components'
import { IBgImage } from '@appTypes/base.types'

interface ICategoryListTemplateProps
  extends Omit<ICategoryListResponse, 'background_image'> {
  category: PageCategories
  getNextPage: () => void
  nextPageError: boolean
  bgImage: IBgImage
}

const CategoryListTemplate: FC<ICategoryListTemplateProps> = ({
  category,
  title,
  description,
  list,
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
          {!list.length ? (
            <InfoText>Nothing found</InfoText>
          ) : (
            <ContentInfiniteScroll
              getNextPage={getNextPage}
              nextPage={next_page}
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
