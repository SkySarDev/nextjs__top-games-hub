import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'

const Platforms: NextPage = () => {
  const { data } = useQuery(['platforms-page'], PagesServices.getPlatforms)

  // prettier-ignore
  return (
    <>
      {data ? (
        <CategoryListTemplate category='platforms' data={data} />
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
