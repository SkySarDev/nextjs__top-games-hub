import { FC } from 'react'
import styled from 'styled-components'
import { CgCalendarDates, CgLink } from 'react-icons/cg'

import { IGamePageResponse } from '@appTypes/gamesPage.types'
import { ROUTES } from '@constants/routes.constants'
import { Sticker, StickerWithLink, MetacriticScore } from '@components/shared'
import { GameInfoPlatforms } from '@components/pages/games'

type GameInfoHeaderGridProps = Pick<
  IGamePageResponse,
  'released' | 'website' | 'metacritic' | 'platforms'
>

const GameInfoHeaderGrid: FC<GameInfoHeaderGridProps> = ({
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
        {released ? (
          <StickerWithLink
            Icon={CgCalendarDates}
            iconSize={20}
            link={`${ROUTES.RELEASE_CALENDAR}/${released}`}
          >
            {released}
          </StickerWithLink>
        ) : (
          <Sticker Icon={CgCalendarDates} iconSize={20}>
            TBA
          </Sticker>
        )}

        {website && (
          <StickerWithLink Icon={CgLink} iconSize={20} externalLink={website}>
            Website
          </StickerWithLink>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
  padding: 0 2px;
  margin-bottom: 15px;
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
