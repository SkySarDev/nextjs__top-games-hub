import { FC } from 'react'
import styled from 'styled-components'

import {
  CardBaseWrapper,
  SkeletonLine,
} from '@styles/components/cards.components'

const CardGameSkeleton: FC = () => {
  return (
    <CardBaseWrapper height={250}>
      <Body>
        <Title>
          <SkeletonLine />
        </Title>
        <InfoRow>
          <SkeletonLine />
          <SkeletonLine />
        </InfoRow>
      </Body>
    </CardBaseWrapper>
  )
}

export default CardGameSkeleton

const Body = styled.div`
  display: grid;
  height: 100%;
  row-gap: 10px;
  padding: 15px;
  align-content: end;
`
const Title = styled.h3`
  height: 25px;
`
const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  column-gap: 10px;
  justify-content: space-between;
  height: 25px;
`
