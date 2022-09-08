import { FC } from 'react'

import { IPlatformsDto } from '@appTypes/platformsPage.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentMain } from '@components/content'
import { CardCommon } from '@components/cards'
import { ContentGrid } from '@styles/components/content.components'

interface IPlatformsContentProps {
  platformsData: IPlatformsDto
}

const PlatformsContent: FC<IPlatformsContentProps> = ({
  platformsData: { background_image, platforms },
}) => {
  return (
    <>
      <MainHead
        title="Platforms"
        description="Top Games Hub. List of video game platforms."
      />

      <ContentHeader image={background_image} />

      <ContentMain title="Platforms">
        <ContentGrid>
          {platforms.map((platform) => (
            <CardCommon
              data={platform}
              category="platforms"
              key={platform.id}
            />
          ))}
        </ContentGrid>
      </ContentMain>
    </>
  )
}

export default PlatformsContent
