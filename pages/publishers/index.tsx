import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { ICardCommon } from '@appTypes/cards.types'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { MainLayout } from '@components/layout'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'

const Publishers: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { data } = useQuery(['publishers-page'], PagesServices.getPublishers)
  const { pathname } = useRouter()
  const { list, nextPage, nextPageError, fetchNextPage } =
    useInfiniteData<ICardCommon>({
      initList: data?.list,
      initNextPage: data?.next_page,
    })

  return (
    <MainLayout
      title={data?.title}
      description={data?.description}
      bgImage={bgImage}
      pathname={pathname}
    >
      {data ? (
        <CategoryListTemplate
          category="publishers"
          list={list}
          getNextPage={fetchNextPage}
          nextPage={nextPage}
          nextPageError={nextPageError}
        />
      ) : (
        <ContentError />
      )}
    </MainLayout>
  )
}

export default Publishers

export const getServerSideProps = async () => {
  return customFetchQuery(['publishers-page'], PagesServices.getPublishers)
}
