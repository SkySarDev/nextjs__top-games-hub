import type { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
  title: string
  children: ReactNode
}

const Title = styled.h5`
  font-size: 19px;
`
const Body = styled.div`
  margin-bottom: 10px;
  color: #999999;

  a {
    color: #999999;
    transition: color 0.3s;

    &:hover {
      color: #e2e0d0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const GameInfoBlock: FC<IProps> = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </>
  )
}

export default GameInfoBlock
