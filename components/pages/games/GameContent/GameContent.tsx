import { FC } from 'react'

import { IGamePageResponse } from '@appTypes/gamesPage.types'
import {
  GameInfo,
  GameDescription,
  GameScreenshots,
  GameInfoHeaderGrid,
} from '@components/pages/games'
import {
  BlockWrapper,
  ContentRows,
} from '@styles/components/content.components'

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
      <ContentRows>
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
      </ContentRows>
    </BlockWrapper>
  )
}

export default GameContent
