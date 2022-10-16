import { FC } from 'react'

import { IGamePageResponse } from '@appTypes/gamesPage.types'
import { IBgImage } from '@appTypes/base.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentWrapper } from '@components/content'
import {
  GameInfo,
  GameDescription,
  GameScreenshots,
  GameInfoHeaderGrid,
} from '@components/pages/games'
import { ContentRows } from '@styles/components/content.components'

interface IGameContentProps {
  data: IGamePageResponse
  bgImage: IBgImage
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
    description_raw,
  },
  bgImage,
}) => {
  return (
    <>
      <MainHead title={name} description={description_raw} />
      <ContentHeader image={bgImage.image} blurDataURL={bgImage.blurDataURL} />

      <ContentWrapper title={name}>
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
      </ContentWrapper>
    </>
  )
}

export default GameContent
