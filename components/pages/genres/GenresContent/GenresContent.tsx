import { FC } from 'react'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentMain } from '@components/content'
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

      <ContentMain title="Genres">
        <ContentGrid>
          {genres.map((genre) => (
            <CardCommon data={genre} category="genres" key={genre.id} />
          ))}
        </ContentGrid>
      </ContentMain>
    </>
  )
}

export default GenresContent
