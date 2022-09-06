import { ReactNode, FC } from 'react'
import styled from 'styled-components'

interface IBlockWrapperProps {
  children: ReactNode
}

const BlockWrapper: FC<IBlockWrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default BlockWrapper

const Wrapper = styled.div`
  background: rgba(36, 38, 33, 0.8);
  border: 1px solid #59584c;
  border-radius: 5px;
  padding: 20px;
`
