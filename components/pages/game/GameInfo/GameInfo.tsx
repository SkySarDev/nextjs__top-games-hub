import { FC } from 'react'
import styled from 'styled-components'

import { IGameDto } from '@appTypes/gamePage.types'
import { ROUTES } from '@constants/routes.constants'
import { GameInfoBlock } from '@components/pages/game'
import { ContentSection } from '@components/content'

interface IGameInfoProps
  extends Pick<
    IGameDto,
    'playtime' | 'developers' | 'publishers' | 'genres' | 'tags'
  > {}

const GameInfo: FC<IGameInfoProps> = ({
  playtime,
  developers,
  publishers,
  genres,
  tags,
}) => {
  const { DEVELOPERS, PUBLISHERS, GENRES, TAGS } = ROUTES

  return (
    <ContentSection title="Game info">
      <Grid>
        {!!playtime && (
          <GameInfoBlock
            title="Average playtime"
            content={`${playtime} hours`}
          />
        )}
        {!!developers?.length && (
          <GameInfoBlock
            title="Developers"
            content={developers}
            queryParam={DEVELOPERS}
          />
        )}
        {!!publishers?.length && (
          <GameInfoBlock
            title="Publishers"
            content={publishers}
            queryParam={PUBLISHERS}
          />
        )}
        {!!genres?.length && (
          <GameInfoBlock title="Genres" content={genres} queryParam={GENRES} />
        )}
      </Grid>

      {!!tags?.length && (
        <Tags>
          <GameInfoBlock title="Tags" content={tags} queryParam={TAGS} />
        </Tags>
      )}
    </ContentSection>
  )
}

export default GameInfo

const Grid = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  text-align: center;
  overflow-wrap: break-word;
`
const Tags = styled.div`
  margin-top: 20px;
  text-align: center;
`
