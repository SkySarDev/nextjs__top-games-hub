import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { ICardCommon } from '@appTypes/cards.types'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'

const Publishers: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { data } = useQuery(['publishers-page'], PagesServices.getPublishers)
  const { list, nextPage, nextPageError, fetchNextPage } =
    useInfiniteData<ICardCommon>({
      initList: data?.list,
      initNextPage: data?.next_page,
    })

  return (
    <>
      {data ? (
        <CategoryListTemplate
          category="publishers"
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

export default Publishers

export const getServerSideProps = async () => {
  return customFetchQuery(['publishers-page'], PagesServices.getPublishers)
}
