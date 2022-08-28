import type { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { MainTitle, IMainTitleProps } from '@styles/components'

interface IProps extends IMainTitleProps {
  children: ReactNode
}

const Title = styled(MainTitle)`
  text-align: center;

  span {
    color: #999999;
  }
`

const GameSectionTitle: FC<IProps> = ({ top, bottom, children }) => {
  return (
    <Title top={top} bottom={bottom}>
      {children}
    </Title>
  )
}

export default GameSectionTitle
