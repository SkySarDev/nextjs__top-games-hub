import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { ContentError } from '@components/content'
import { HomeContent } from '@components/pages/home'

const Home: NextPage = () => {
  const { data } = useQuery(['home-page'], PagesServices.getHome)

  // prettier-ignore
  return (
    <>
      {data ? (
        <HomeContent data={data}/>
      ) : (
        <ContentError />
      )}
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  return customFetchQuery(['home-page'], PagesServices.getHome)
}
