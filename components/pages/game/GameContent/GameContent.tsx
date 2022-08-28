import React, { FC } from 'react'
import styled from 'styled-components'

import { IGame } from '@appTypes/gamePage.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentMain } from '@components/content'
import { GenresList, MetacriticScore } from '@components/shared'
import {
  GameInfo,
  GameDescription,
  GameScreenshots,
} from '@components/pages/game'

interface IProps {
  gameData: IGame
}

const Wrapper = styled.div`
  font-size: 16px;
  line-height: 150%;

  & > div:not(:last-child) {
    margin-bottom: 20px;
  }
`
const TopGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 30px;
  height: 35px;
  margin-bottom: 20px;
  padding: 0 5px;
`

const GameContent: FC<IProps> = ({
  gameData: {
    name,
    released,
    website,
    genres,
    platforms,
    developers,
    publishers,
    tags,
    screenshots,
    metacritic,
    background_image,
    description,
    description_raw,
  },
}) => {
  return (
    <div>
      <MainHead title={name} description={description_raw} />
      <ContentHeader image={background_image} />

      <ContentMain title={name}>
        <Wrapper>
          <TopGrid>
            {!!genres.length && (
              <GenresList genresList={genres} maxWidth={900} />
            )}
            {metacritic && (
              <MetacriticScore score={metacritic} size={30} fontSize={18} />
            )}
          </TopGrid>

          <GameDescription description={description} />

          <GameInfo
            released={released}
            website={website}
            platforms={platforms}
            developers={developers}
            publishers={publishers}
            tags={tags}
          />

          {!!screenshots.length && (
            <GameScreenshots screenshots={screenshots} gameName={name} />
          )}
        </Wrapper>
      </ContentMain>
    </div>
  )
}

export default GameContent
