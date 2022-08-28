import { FC } from 'react'
import Link from 'next/link'

import { IGame } from '@appTypes/gamePage.types'
import { ROUTES } from '@constants/routes.constants'
import {
  GameSectionTitle,
  GameInfoBlock,
  GameInfoValueList,
} from '@components/pages/game'
import { ContentSection } from '@styles/components'

interface IProps
  extends Pick<
    IGame,
    'released' | 'website' | 'developers' | 'publishers' | 'platforms' | 'tags'
  > {}

const GameInfo: FC<IProps> = ({
  released,
  website,
  developers,
  publishers,
  platforms,
  tags,
}) => {
  return (
    <ContentSection>
      <GameSectionTitle bottom={15}>Game info</GameSectionTitle>

      {released && (
        <GameInfoBlock title="Release date">
          <Link
            href={`${ROUTES.RELEASE_CALENDAR}?dates=${released},${released}`}
          >
            {released}
          </Link>
        </GameInfoBlock>
      )}

      {website && (
        <GameInfoBlock title="Website">
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </GameInfoBlock>
      )}

      {!!developers.length && (
        <GameInfoBlock title="Developers">
          <GameInfoValueList queryParam="developers" array={developers} />
        </GameInfoBlock>
      )}

      {!!publishers.length && (
        <GameInfoBlock title="Publishers">
          <GameInfoValueList queryParam="publishers" array={publishers} />
        </GameInfoBlock>
      )}

      {!!platforms.length && (
        <GameInfoBlock title="Platforms">
          <GameInfoValueList queryParam="platforms" array={platforms} />
        </GameInfoBlock>
      )}

      {!!tags.length && (
        <GameInfoBlock title="Tags">
          <GameInfoValueList queryParam="tags" array={tags} />
        </GameInfoBlock>
      )}
    </ContentSection>
  )
}

export default GameInfo
