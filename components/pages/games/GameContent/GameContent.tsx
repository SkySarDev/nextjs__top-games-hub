import { FC } from 'react'
import styled from 'styled-components'

import { IGamePageResponse } from '@appTypes/gamesPage.types'
import {
  GameInfo,
  GameDescription,
  GameScreenshots,
  GameInfoHeaderGrid,
} from '@components/pages/games'
import { BlockWrapper } from '@styles/components/content.components'

interface IGameContentProps {
  data: IGamePageResponse
}

const GameContent: FC<IGameContentProps> = ({
  data: {
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
    description,
  },
}) => {
  return (
    <BlockWrapper>
      <GameInfoHeaderGrid
        released={released}
        website={website}
        metacritic={metacritic}
        platforms={platforms}
      />

      <GameContentGrid>
        <Grid>
          <GameInfo
            playtime={playtime}
            developers={developers}
            publishers={publishers}
            genres={genres}
            tags={tags}
          />
          <GameDescription description={description} />
        </Grid>

        {!!screenshots?.length && (
          <GameScreenshots screenshots={screenshots} gameName={name} />
        )}
      </GameContentGrid>
    </BlockWrapper>
  )
}

export default GameContent

const Grid = styled.div`
  display: grid;
  align-items: start;
  gap: 10px;

  @media (min-width: 440px) {
    gap: 15px;
  }
`
const GameContentGrid = styled(Grid)`
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 300px;
  }
`
