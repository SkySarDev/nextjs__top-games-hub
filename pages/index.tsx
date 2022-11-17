import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { MainLayout } from '@components/layout'
import { ContentError } from '@components/content'
import { HomeContent } from '@components/pages/home'

const Home: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { data } = useQuery(['home-page'], PagesServices.getHome)

  return (
    <MainLayout
      title={data?.title}
      description={data?.description}
      bgImage={bgImage}
    >
      {data ? (
        <HomeContent
          topGames={data.topGames}
          newReleases={data.newReleases}
          popularGenres={data.popularGenres}
          tags={data.tags}
        />
      ) : (
        <ContentError />
      )}
    </MainLayout>
  )
}

export default Home

export const getServerSideProps = async () => {
  return customFetchQuery(['home-page'], PagesServices.getHome)
}
