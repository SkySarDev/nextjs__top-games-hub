import type { NextPage } from 'next'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rgba(36, 38, 33, 0.8);
  border: 1px solid #59584c;
  border-radius: 5px;
  padding: 20px;
`

interface IContentContainerProps {
  children: ReactNode
}

const BlockWrapper: NextPage<IContentContainerProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default BlockWrapper
