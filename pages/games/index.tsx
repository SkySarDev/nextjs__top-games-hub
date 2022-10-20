import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { customFetchQuery } from '@utils/fetch.utils'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { MainLayout } from '@components/layout'
import { ContentError } from '@components/content'
import { GamesContent } from '@components/pages/games'
import { useRouter } from 'next/router'

const Games: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { data } = useQuery(['games-page'], PagesServices.getGames)
  const { pathname } = useRouter()
  const { list, nextPage, nextPageError, fetchNextPage } = useInfiniteData({
    initList: data?.games_list,
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
        <GamesContent
          gamesList={list}
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

export default Games

export const getServerSideProps = async () => {
  return await customFetchQuery(['games-page'], PagesServices.getGames)
}
