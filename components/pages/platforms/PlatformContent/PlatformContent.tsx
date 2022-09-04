import { FC } from 'react'
import styled from 'styled-components'

import { IPlatformDto } from '@appTypes/platformsPage.types'
import { MainHead } from '@components/layout'
import {
  ContentHeader,
  ContentMain,
  ContentGrid,
  ContentSection,
} from '@components/content'
import { CardGame } from '@components/cards'
import { FilterBlock } from '@components/shared'

interface IProps {
  platformData: IPlatformDto
}

const PlatformContent: FC<IProps> = ({
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
        <Wrapper>
          <ContentSection title="Description" titleAlign="left">
            <p>{description}</p>
          </ContentSection>

          <FilterBlock gamesCount={games_count} />

          <ContentGrid>
            {games_list.map((gameItem) => (
              <CardGame data={gameItem} key={gameItem.name} />
            ))}
          </ContentGrid>
        </Wrapper>
      </ContentMain>
    </>
  )
}

export default PlatformContent

const Wrapper = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 20px;
  }
`
