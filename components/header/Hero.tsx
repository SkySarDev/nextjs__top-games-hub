import { FC } from 'react'
import styled from 'styled-components'

import { DEFAULT_TITLE } from '@constants/common.constants'
import { SearchBlock } from '@components/header'

interface IHeroProps {
  title?: string
}

const Hero: FC<IHeroProps> = ({ title = DEFAULT_TITLE }) => {
  return (
    <Wrapper>
      <HeroTitle>{title}</HeroTitle>

      <HeroSearch>
        <SearchBlock />
      </HeroSearch>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  display: grid;
  align-items: end;
  margin: 50px 0 10px 0;
  height: 200px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 220px;
    justify-content: space-between;
    column-gap: 30px;
    height: 250px;
  }

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 250px;
    height: 330px;
  }
`
const HeroTitle = styled.h1`
  margin: 0;
  font-size: 26px;
  font-weight: bold;
  line-height: 120%;
  color: #e2e0d0;
  text-shadow: 3px 3px #1b1b1b;
  padding-left: 10px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`
const HeroSearch = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`
