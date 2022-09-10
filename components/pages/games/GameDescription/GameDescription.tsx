import type { FC } from 'react'

import { ContentSection } from '@components/content'

interface IGameDescriptionProps {
  description: string
}

const GameDescription: FC<IGameDescriptionProps> = ({ description }) => {
  return (
    <ContentSection title="Description">
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </ContentSection>
  )
}

export default GameDescription
