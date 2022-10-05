import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { ICardCommon } from '@appTypes/cards.types'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'
import { useInfiniteData } from '@hooks/useInfiniteData'

const Genres: NextPage = () => {
  const { data } = useQuery(['genres-page'], PagesServices.getGenres)
  const { list, nextPage, nextPageError, fetchNextPage } =
    useInfiniteData<ICardCommon>({
      initList: data?.list,
      initNextPage: data?.next_page,
    })

  return (
    <>
      {data ? (
        <CategoryListTemplate
          category="genres"
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

export default Genres

export const getServerSideProps = async () => {
  return customFetchQuery(['genres-page'], PagesServices.getGenres)
}
