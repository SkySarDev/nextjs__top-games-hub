import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { ICardCommon } from '@appTypes/cards.types'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'

const Developers: NextPage = () => {
  const { data } = useQuery(['developers-page'], PagesServices.getDevelopers)
  const { list, nextPage, nextPageError, fetchNextPage } =
    useInfiniteData<ICardCommon>({
      initList: data?.list,
      initNextPage: data?.next_page,
    })

  return (
    <>
      {data ? (
        <CategoryListTemplate
          category="developers"
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

export default Developers

export const getServerSideProps = async () => {
  return customFetchQuery(['developers-page'], PagesServices.getDevelopers)
}
