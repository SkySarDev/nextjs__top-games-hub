import { FC } from 'react'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentWrapper } from '@components/content'
import { CardCommon } from '@components/cards'
import { IGenresDto } from '@appTypes/genresPage.types'
import { ContentGrid } from '@styles/components/content.components'

interface IGenresContentProps {
  genresData: IGenresDto
}

const GenresContent: FC<IGenresContentProps> = ({
  genresData: { background_image, genres },
}) => {
  return (
    <>
      <MainHead
        title="Genres"
        description="Top Games Hub. List of video game genres."
      />

      <ContentHeader image={background_image} />

      <ContentWrapper title="Genres">
        <ContentGrid>
          {genres.map((genre) => (
            <CardCommon data={genre} category="genres" key={genre.id} />
          ))}
        </ContentGrid>
      </ContentWrapper>
    </>
  )
}

export default GenresContent
