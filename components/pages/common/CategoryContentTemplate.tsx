import { FC } from 'react'

import { ICardGame } from '@appTypes/cards.types'
import { ContentSection, ContentInfiniteScroll } from '@components/content'
import { CardGame } from '@components/cards'
import {
  BlockWrapper,
  ContentRows,
  InfoText,
} from '@styles/components/content.components'

interface ICategoryContentTemplateProps {
  description: string
  gamesList: ICardGame[]
  nextPage: string | null
  getNextPage: () => void
  nextPageError: boolean
}

const CategoryContentTemplate: FC<ICategoryContentTemplateProps> = ({
  description,
  gamesList,
  getNextPage,
  nextPage,
  nextPageError,
}) => {
  return (
    <BlockWrapper>
      <ContentRows>
        {description && (
          <ContentSection title="Description">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </ContentSection>
        )}

        {!gamesList.length ? (
          <InfoText>No games found</InfoText>
        ) : (
          <ContentInfiniteScroll
            getNextPage={getNextPage}
            nextPage={nextPage}
            nextPageError={nextPageError}
            dataLength={gamesList.length}
          >
            {gamesList.map((game) => (
              <CardGame data={game} key={game.name} />
            ))}
          </ContentInfiniteScroll>
        )}
      </ContentRows>
    </BlockWrapper>
  )
}

export default CategoryContentTemplate
