import { FC } from 'react'

import { IGameDto } from '@appTypes/gamePage.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentMain } from '@components/content'
import {
  GameInfo,
  GameDescription,
  GameScreenshots,
  GameInfoHeaderGrid,
} from '@components/pages/game'
import { ContentRows } from '@styles/components/content.components'

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
      </ContentMain>
    </div>
  )
}

export default GameContent
