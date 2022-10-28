import type { FC } from 'react'
import styled from 'styled-components'

import { ContentSection } from '@components/content'

interface IGameDescriptionProps {
  description: string
}

const GameDescription: FC<IGameDescriptionProps> = ({ description }) => {
  return (
    <ContentSection title="Description">
      <Text dangerouslySetInnerHTML={{ __html: description }} />
    </ContentSection>
  )
}

export default GameDescription

const Text = styled.div`
  word-break: break-word;
`
