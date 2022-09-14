import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'

const Genres: NextPage = () => {
  const { data } = useQuery(['genres-page'], PagesServices.getGenres)

  // prettier-ignore
  return (
    <>
      {data ? (
        <CategoryListTemplate category='genres' data={data} />
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
