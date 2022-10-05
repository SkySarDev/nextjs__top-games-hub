import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { ICardCommon } from '@appTypes/cards.types'

const Publishers: NextPage = () => {
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
          background_image={data.background_image}
          list={list}
          getNextPage={fetchNextPage}
          next_page={nextPage}
          nextPageError={nextPageError}
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
