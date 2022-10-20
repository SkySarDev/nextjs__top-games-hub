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
      <SearchBlock />
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  margin: 50px 0 10px 0;
  display: grid;
  grid-template-columns: 1fr 250px;
  justify-content: space-between;
  align-items: end;
  column-gap: 30px;
  height: 330px;
`
const HeroTitle = styled.h1`
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  line-height: 120%;
  color: #e2e0d0;
  text-shadow: 3px 3px #1b1b1b;
  padding-left: 10px;
`
