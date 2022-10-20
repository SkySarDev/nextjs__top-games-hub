import { FC } from 'react'

import { ICardCommon } from '@appTypes/cards.types'
import { PageCategories } from '@appTypes/pages.types'
import { ContentInfiniteScroll } from '@components/content'
import { CardCommon } from '@components/cards'
import { BlockWrapper } from '@components/shared'
import { ContentRows, InfoText } from '@styles/components/content.components'

interface ICategoryListTemplateProps {
  category: PageCategories
  list: ICardCommon[]
  nextPage: string | null
  getNextPage: () => void
  nextPageError: boolean
}

const CategoryListTemplate: FC<ICategoryListTemplateProps> = ({
  category,
  list,
  getNextPage,
  nextPage,
  nextPageError,
}) => {
  return (
    <BlockWrapper>
      <ContentRows>
        {!list.length ? (
          <InfoText>Nothing found</InfoText>
        ) : (
          <ContentInfiniteScroll
            getNextPage={getNextPage}
            nextPage={nextPage}
            nextPageError={nextPageError}
            dataLength={list.length}
          >
            {list.map((item) => (
              <CardCommon data={item} category={category} key={item.id} />
            ))}
          </ContentInfiniteScroll>
        )}
      </ContentRows>
    </BlockWrapper>
  )
}

export default CategoryListTemplate
