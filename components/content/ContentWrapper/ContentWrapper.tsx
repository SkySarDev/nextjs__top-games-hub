import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

import { BlockWrapper } from '@styles/components/content.components'

const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <BlockWrapper>{children}</BlockWrapper>
    </Wrapper>
  )
}

export default ContentWrapper

const Wrapper = styled.div`
  max-width: 850px;

  @media (min-width: 1080px) {
    max-width: 1160px;
  }
`
