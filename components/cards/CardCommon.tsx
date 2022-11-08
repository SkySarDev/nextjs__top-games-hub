import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { ICardCommon } from '@appTypes/cards.types'
import { PageCategories } from '@appTypes/pages.types'
import { CardWrapper } from '@components/cards/index'

interface ICardCommonProps {
  data: ICardCommon
  category: PageCategories
}

const CardCommon: FC<ICardCommonProps> = ({
  data: { id, name, image_background, games_count },
  category,
}) => {
  return (
    <CardWrapper bgImage={image_background} maxHeight={220} sizeRatio={0.6}>
      <Link href={`/${category}/${id}`} prefetch={false}>
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
  padding: 13px;
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
