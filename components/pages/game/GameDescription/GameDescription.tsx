import type { FC } from 'react'

import { GameSectionTitle } from '@components/pages/game'
import { ContentSection } from '@styles/components'

interface IProps {
  description: string
}

const GameDescription: FC<IProps> = ({ description }) => {
  return (
    <ContentSection>
      <GameSectionTitle bottom={15}>Description</GameSectionTitle>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </ContentSection>
  )
}

export default GameDescription
