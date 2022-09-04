import { FC } from 'react'

import { IPlatformsDto } from '@appTypes/platformsPage.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentMain, ContentGrid } from '@components/content'
import { CardCommon } from '@components/cards'

interface IProps {
  platformsData: IPlatformsDto
}

const PlatformsContent: FC<IProps> = ({
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
