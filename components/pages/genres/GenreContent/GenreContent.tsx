import { FC } from 'react'

import { IGenreDto } from '@appTypes/genresPage.types'
import { MainHead } from '@components/layout'
import {
  ContentHeader,
  ContentWrapper,
  ContentSection,
} from '@components/content'
import { CardGame } from '@components/cards'
import { FilterBlock } from '@components/shared'
import { ContentGrid, ContentRows } from '@styles/components/content.components'

interface IGenreContentProps {
  genreData: IGenreDto
}

const GenreContent: FC<IGenreContentProps> = ({
  genreData: {
    name,
    description,
    description_raw,
    background_image,
    games_count,
    games_list,
  },
}) => {
  const title = `${name} games`

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

export default GenreContent
