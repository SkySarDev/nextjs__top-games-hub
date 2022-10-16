import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { ICardCommon } from '@appTypes/cards.types'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'

const Tags: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { data } = useQuery(['tags-page'], PagesServices.getTags)
  const { list, nextPage, nextPageError, fetchNextPage } =
    useInfiniteData<ICardCommon>({
      initList: data?.list,
      initNextPage: data?.next_page,
    })

  return (
    <>
      {data ? (
        <CategoryListTemplate
          category="tags"
          title={data.title}
          description={data.description}
          list={list}
          getNextPage={fetchNextPage}
          next_page={nextPage}
          nextPageError={nextPageError}
          bgImage={bgImage}
        />
      ) : (
        <ContentError />
      )}
    </>
  )
}

export default Tags

export const getServerSideProps = async () => {
  return customFetchQuery(['tags-page'], PagesServices.getTags)
}
