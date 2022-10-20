import styled from 'styled-components'

const HeroTitle = () => {
  return (
    <Title>
      This is a title for test This is a title for test This is a title for
    </Title>
  )
}

export default HeroTitle

const Title = styled.h1`
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  line-height: 120%;
  color: #e2e0d0;
  text-shadow: 3px 3px #1b1b1b;
  padding-left: 10px;
`
