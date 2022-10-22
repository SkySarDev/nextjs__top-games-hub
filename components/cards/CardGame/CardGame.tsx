import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { ICardGame } from '@appTypes/cards.types'
import { getShortDateString } from '@utils/dates.utils'
import { ROUTES } from '@constants/routes.constants'
import { CardWrapper } from '@components/cards'
import { GenresList, MetacriticScore } from '@components/shared'

interface ICardGameProps {
  data: ICardGame
}

const CardGame: FC<ICardGameProps> = ({
  data: { name, slug, background_image, metacritic, released, genres },
}) => {
  const releaseDateShort = released ? getShortDateString(released) : null

  return (
    <CardWrapper bgImage={background_image} height={250}>
      <Body>
        <Link href={`${ROUTES.GAMES}/${slug}`}>
          <a>
            <ContentGrid>
              <Rating>
                {metacritic && <MetacriticScore score={metacritic} />}
              </Rating>
              <Title>{name}</Title>
            </ContentGrid>
          </a>
        </Link>

        <InfoRow>
          <GenresList genresList={genres} />
          {released && (
            <Link href={`${ROUTES.RELEASE_CALENDAR}/${released}`}>
              {releaseDateShort}
            </Link>
          )}
        </InfoRow>
      </Body>
    </CardWrapper>
  )
}

export default CardGame

const Body = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 1fr auto;
  row-gap: 7px;
  padding: 13px;
  align-content: end;
`
const ContentGrid = styled.div`
  display: grid;
  align-content: space-between;
  height: 100%;

  :hover h3 {
    transition: color 0.35s;
    color: #999;
  }
`
const Rating = styled.div`
  justify-self: end;
`
const Title = styled.h3`
  font-size: 18px;
  color: #e2e0d0;
`
const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 15px;
  justify-content: space-between;
  align-items: end;
  height: 28px;

  a {
    font-size: 15px;
    color: #e2e0d0;
    transition: color 0.3s;

    :hover {
      color: #999;
    }
  }
`
