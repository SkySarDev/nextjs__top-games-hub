import { FC } from 'react'

import { IPlatformDto } from '@appTypes/platformsPage.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentMain, ContentSection } from '@components/content'
import { CardGame } from '@components/cards'
import { FilterBlock } from '@components/shared'
import { ContentGrid, ContentRows } from '@styles/components/content.components'

interface IPlatformContentProps {
  platformData: IPlatformDto
}

const PlatformContent: FC<IPlatformContentProps> = ({
  platformData: {
    name,
    description,
    background_image,
    games_count,
    games_list,
  },
}) => {
  const title = `Games for ${name}`

  return (
    <>
      <MainHead title={title} description={description} />
      <ContentHeader image={background_image} />

      <ContentMain title={title}>
        <ContentRows>
          <ContentSection title="Description" titleAlign="left">
            <p>{description}</p>
          </ContentSection>

          <FilterBlock gamesCount={games_count} />

          <ContentGrid>
            {games_list.map((gameItem) => (
              <CardGame data={gameItem} key={gameItem.name} />
            ))}
          </ContentGrid>
        </ContentRows>
      </ContentMain>
    </>
  )
}

export default PlatformContent
