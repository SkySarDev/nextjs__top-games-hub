import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { ICardCommon } from '@appTypes/cards.types'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { MainLayout } from '@components/layout'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'

const Platforms: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { data } = useQuery(['platforms-page'], PagesServices.getPlatforms)
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
    >
      {data ? (
        <CategoryListTemplate
          category="platforms"
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

export default Platforms

export const getServerSideProps = async () => {
  return customFetchQuery(['platforms-page'], PagesServices.getPlatforms)
}
