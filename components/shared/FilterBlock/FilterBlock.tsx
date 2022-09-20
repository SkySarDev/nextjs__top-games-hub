import React, { FC } from 'react'
import styled from 'styled-components'
import { BsFilterRight } from 'react-icons/bs'

import { Sticker } from '@components/shared'
import { MainTitle } from '@styles/components'

interface IProps {
  gamesCount?: number
}

const FilterBlock: FC<IProps> = ({ gamesCount = 0 }) => {
  return (
    <Wrapper>
      <GamesCount>
        Games count: <span>{gamesCount.toLocaleString('en-US')}</span>
      </GamesCount>

      <Sticker Icon={BsFilterRight} iconSize={20}>
        Filter
      </Sticker>
    </Wrapper>
  )
}

export default FilterBlock

const Wrapper = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(2, max-content);
  padding: 0 5px;
`
const GamesCount = styled(MainTitle)`
  span {
    font-size: 20px;
    color: #999;
  }
`
