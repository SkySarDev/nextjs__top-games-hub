import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const BlockWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default BlockWrapper

const Wrapper = styled.div`
  background: rgba(36, 38, 33, 0.8);
  border: 1px solid #59584c;
  padding: 20px;
`
