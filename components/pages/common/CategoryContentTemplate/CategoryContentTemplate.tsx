import { FC } from 'react'

import { ICategoryContentResponse } from '@appTypes/pages.types'
import { MainHead } from '@components/layout'
import {
  ContentHeader,
  ContentWrapper,
  ContentSection,
} from '@components/content'
import { FilterBlock } from '@components/shared'
import { CardGame } from '@components/cards'
import { ContentRows, ContentGrid } from '@styles/components/content.components'

interface ICategoryContentTemplateProps {
  data: ICategoryContentResponse
}

const CategoryContentTemplate: FC<ICategoryContentTemplateProps> = ({
  data: {
    title,
    description,
    description_raw,
    background_image,
    games_count,
    games_list,
  },
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

          <ContentGrid>
            {games_list.map((gameItem) => (
              <CardGame data={gameItem} key={gameItem.name} />
            ))}
          </ContentGrid>
        </ContentRows>
      </ContentWrapper>
    </>
  )
}

export default CategoryContentTemplate
