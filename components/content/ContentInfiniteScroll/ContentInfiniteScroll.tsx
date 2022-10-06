import { FC, ReactNode } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'

import { Spinner } from '@components/shared'
import { ContentGrid } from '@styles/components/content.components'

interface IContentInfiniteScrollProps {
  getNextPage: () => void
  nextPage: string | null
  nextPageError: boolean
  dataLength: number
  children: ReactNode
}

const ContentInfiniteScroll: FC<IContentInfiniteScrollProps> = ({
  nextPage,
  nextPageError,
  getNextPage,
  dataLength,
  children,
}) => {
  return (
    <>
      <InfiniteScroll
        next={getNextPage}
        hasMore={!!nextPage && !nextPageError}
        loader={
          <ShowSpinner>
            <Spinner />
          </ShowSpinner>
        }
        dataLength={dataLength}
        style={{ overflow: 'hidden' }}
      >
        <ContentGrid>{children}</ContentGrid>
      </InfiniteScroll>

      {nextPageError && <ShowError>Data loading error</ShowError>}
    </>
  )
}

export default ContentInfiniteScroll

const ShowSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const ShowError = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 130%;
  color: rgb(250, 42, 42, 0.85);
  text-align: center;
`
