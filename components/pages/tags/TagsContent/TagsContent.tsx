import { FC } from 'react'

import { ITagsDto } from '@appTypes/tagsPage.types'
import { MainHead } from '@components/layout'
import { ContentHeader, ContentMain } from '@components/content'
import { CardCommon } from '@components/cards'
import { ContentGrid } from '@styles/components/content.components'

interface ITagsContentProps {
  tagsData: ITagsDto
}

const TagsContent: FC<ITagsContentProps> = ({
  tagsData: { background_image, tags },
}) => {
  return (
    <>
      <MainHead
        title="Tags"
        description="Top Games Hub. List of video game tags."
      />

      <ContentHeader image={background_image} />

      <ContentMain title="Tags">
        <ContentGrid>
          {tags.map((tag) => (
            <CardCommon data={tag} category="tags" key={tag.id} />
          ))}
        </ContentGrid>
      </ContentMain>
    </>
  )
}

export default TagsContent
