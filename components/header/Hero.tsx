import styled from 'styled-components'

import { SearchBlock, HeroTitle } from '@components/header/index'

const Hero = () => {
  return (
    <Wrapper>
      <HeroTitle />
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
