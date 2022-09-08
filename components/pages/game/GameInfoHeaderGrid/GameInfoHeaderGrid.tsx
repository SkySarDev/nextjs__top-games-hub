import { FC } from 'react'
import styled from 'styled-components'
import { CgCalendarDates, CgLink } from 'react-icons/cg'

import { IGameDto } from '@appTypes/gamePage.types'
import { Sticker, MetacriticScore } from '@components/shared'
import { GameInfoPlatforms } from '@components/pages/game'

interface IGameInfoHeaderGridProps
  extends Pick<IGameDto, 'released' | 'website' | 'metacritic' | 'platforms'> {}

const GameInfoHeaderGrid: FC<IGameInfoHeaderGridProps> = ({
  released,
  website,
  platforms,
  metacritic,
}) => {
  return (
    <MainGrid>
      <GridItem>
        <GameInfoPlatforms platforms={platforms} />
      </GridItem>

      <GridItem>
        <Sticker Icon={CgCalendarDates} iconSize={20}>
          {released || 'TBA'}
        </Sticker>

        {website && (
          <a href={website} target="_blank" rel="noreferrer">
            <Sticker Icon={CgLink} iconSize={20}>
              Website
            </Sticker>
          </a>
        )}

        {metacritic && (
          <MetacriticScore score={metacritic} size={34} fontSize={18} />
        )}
      </GridItem>
    </MainGrid>
  )
}

export default GameInfoHeaderGrid

const MainGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, max-content);
  height: 35px;
  padding: 0 5px;
`
const GridItem = styled.div`
  display: flex;
  column-gap: 10px;

  :first-child a {
    line-height: 0;
    color: #d5d0c8;
    transition: color 0.35s;

    :hover {
      color: rgba(211, 203, 192, 0.6);
    }
  }
`
