import { FC } from 'react'
import styled from 'styled-components'

import { BlockWrapper, InfoText } from '@styles/components/content.components'

interface IContentErrorProps {
  statusText?: string
}

const ContentError: FC<IContentErrorProps> = ({ statusText }) => {
  const message =
    statusText || 'Oops. Something went wrong... Please try again later.'

  return (
    <BlockWrapper>
      <Text>{message}</Text>
    </BlockWrapper>
  )
}

export default ContentError

const Text = styled(InfoText)`
  :not(:last-child) {
    margin-bottom: 15px;
  }
`
