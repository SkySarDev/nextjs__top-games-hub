import { FC } from 'react'
import styled from 'styled-components'

import { IGamePageResponse } from '@appTypes/gamesPage.types'
import { ROUTES } from '@constants/routes.constants'
import { GameInfoBlock } from '@components/pages/games'
import { ContentSection } from '@components/content'

type GameInfoProps = Pick<
  IGamePageResponse,
  'playtime' | 'developers' | 'publishers' | 'genres' | 'tags'
>

const { DEVELOPERS, PUBLISHERS, GENRES, TAGS } = ROUTES

const GameInfo: FC<GameInfoProps> = ({
  playtime,
  developers,
  publishers,
  genres,
  tags,
}) => {
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
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  text-align: center;
  margin-bottom: 20px;
`
const Tags = styled.div`
  text-align: center;
`
