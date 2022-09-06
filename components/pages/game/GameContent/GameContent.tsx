import { FC } from 'react'
import styled from 'styled-components'

import { IGameDto } from '@appTypes/gamePage.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentMain } from '@components/content'
import {
  GameInfo,
  GameDescription,
  GameScreenshots,
  GameInfoHeaderGrid,
} from '@components/pages/game'

interface IGameContentProps {
  gameData: IGameDto
}

const GameContent: FC<IGameContentProps> = ({
  gameData: {
    name,
    released,
    website,
    playtime,
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
          <GameInfoHeaderGrid
            released={released}
            website={website}
            metacritic={metacritic}
            platforms={platforms}
          />

          <GameInfo
            playtime={playtime}
            developers={developers}
            publishers={publishers}
            genres={genres}
            tags={tags}
          />

          <GameDescription description={description} />

          {!!screenshots?.length && (
            <GameScreenshots screenshots={screenshots} gameName={name} />
          )}
        </Wrapper>
      </ContentMain>
    </div>
  )
}

export default GameContent

const Wrapper = styled.div`
  font-size: 16px;
  line-height: 150%;

  & > div:not(:last-child) {
    margin-bottom: 20px;
  }
`
