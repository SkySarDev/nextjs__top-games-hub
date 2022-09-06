import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { ICardCommon } from '@appTypes/cards.types'
import { CardWrapper } from '@components/cards'

interface ICardCommonProps {
  data: ICardCommon
  category: 'genres' | 'tags' | 'platforms'
}

const CardCommon: FC<ICardCommonProps> = ({ data, category }) => {
  const { id, name, image_background, games_count } = data

  return (
    <CardWrapper bgImage={image_background} width={344} height={218}>
      <Link href={`/${category}/${id}`}>
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

const Body = styled.div`
  position: relative;
  display: grid;
  align-content: end;
  height: 100%;
  padding: 15px;
  color: #e2e0d0;
`
const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`
const InfoRow = styled.div`
  text-align: right;
  color: #999;
`
const GamesCount = styled.span`
  padding: 5px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #59584c;
  border-radius: 3px;
  color: #e2e0d0;
`
