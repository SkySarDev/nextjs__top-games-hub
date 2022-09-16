import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'

const Publishers: NextPage = () => {
  const { data } = useQuery(['publishers-page'], PagesServices.getPublishers)

  // prettier-ignore
  return (
    <>
      {data ? (
        <CategoryListTemplate category='publishers' data={data} />
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
