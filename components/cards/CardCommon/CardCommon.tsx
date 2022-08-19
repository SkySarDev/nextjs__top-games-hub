import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

import { ICardCommon } from '@appTypes/cards.types'
import { ROUTES } from '@constants/routes.constants'
import { CardWrapper } from '@components/cards'

interface ICardCommonProps {
  data: ICardCommon
  category: 'genres' | 'tags'
}

const Body = styled.div`
  position: relative;
  display: grid;
  align-content: end;
  height: 100%;
  padding: 15px;
  color: #e2e0d0;
`
const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`
const InfoRow = styled.div`
  text-align: right;
  color: #999999;
`
const GamesCount = styled.span`
  padding: 5px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #59584c;
  border-radius: 3px;
  color: #e2e0d0;
`

const CardCommon: NextPage<ICardCommonProps> = ({ data, category }) => {
  const { id, name, image_background, games_count } = data

  return (
    <CardWrapper bgImage={image_background} width={344} height={218}>
      <Link href={`${ROUTES.GAMES}?${category}=${id}`}>
        <a>
          <Body>
            <Title>{name}</Title>
            <InfoRow>
              <span>Games count: </span>
              <GamesCount>{games_count.toLocaleString('en-US')}</GamesCount>
            </InfoRow>
          </Body>
        </a>
      </Link>
    </CardWrapper>
  )
}

export default CardCommon
