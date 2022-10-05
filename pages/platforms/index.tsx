import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { ICardCommon } from '@appTypes/cards.types'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'

const Platforms: NextPage = () => {
  const { data } = useQuery(['platforms-page'], PagesServices.getPlatforms)
  const { list, nextPage, nextPageError, fetchNextPage } =
    useInfiniteData<ICardCommon>({
      initList: data?.list,
      initNextPage: data?.next_page,
    })

  return (
    <>
      {data ? (
        <CategoryListTemplate
          category="platforms"
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

export default Platforms

export const getServerSideProps = async () => {
  return customFetchQuery(['platforms-page'], PagesServices.getPlatforms)
}
