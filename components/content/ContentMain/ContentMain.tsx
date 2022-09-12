import type { ReactNode, FC } from 'react'
import styled from 'styled-components'

import { BlockWrapper } from '@components/shared'

interface IContentMainProps {
  title: string
  children: ReactNode
}

const ContentMain: FC<IContentMainProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <BlockWrapper>{children}</BlockWrapper>
    </Wrapper>
  )
}

export default ContentMain

const Wrapper = styled.div`
  position: relative;
  margin-top: 300px;
`
const Title = styled.h1`
  position: absolute;
  left: 0;
  top: -50px;
  margin: 0;
  padding-left: 20px;
  font-size: 30px;
  font-weight: bold;
  line-height: 130%;
  color: #e2e0d0;
  text-shadow: 3px 3px #1b1b1b;
`
