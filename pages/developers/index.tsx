import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { ContentError } from '@components/content'
import { CategoryListTemplate } from '@components/pages/common'

const Developers: NextPage = () => {
  const { data } = useQuery(['developers-page'], PagesServices.getDevelopers)

  // prettier-ignore
  return (
    <>
      {data ? (
        <CategoryListTemplate category='developers' data={data} />
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
