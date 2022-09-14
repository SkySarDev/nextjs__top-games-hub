import { FC } from 'react'

import { ICategoryListResponse, PageCategories } from '@appTypes/pages.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentWrapper } from '@components/content'
import { CardCommon } from '@components/cards'
import { ContentGrid } from '@styles/components/content.components'

interface ICategoryListTemplateProps {
  category: PageCategories
  data: ICategoryListResponse
}

const CategoryListTemplate: FC<ICategoryListTemplateProps> = ({
  category,
  data: { title, description, background_image, list },
}) => {
  return (
    <>
      <MainHead title={title} description={description} />

      <ContentHeader image={background_image} />

      <ContentWrapper title={title}>
        <ContentGrid>
          {list.map((item) => (
            <CardCommon data={item} category={category} key={item.id} />
          ))}
        </ContentGrid>
      </ContentWrapper>
    </>
  )
}

export default CategoryListTemplate
