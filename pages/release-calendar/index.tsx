import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { useInfiniteData } from '@hooks/useInfiniteData'
import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { ICardGame } from '@appTypes/cards.types'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { MainLayout } from '@components/layout'
import { ContentError } from '@components/content'
import { GamesContent } from '@components/pages/games'

const ReleaseCalendar: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { data } = useQuery(
    ['release-calendar-page'],
    PagesServices.getReleaseCalendar
  )
  const { pathname } = useRouter()
  const { list, nextPage, nextPageError, fetchNextPage } =
    useInfiniteData<ICardGame>({
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
          nextPage={nextPage}
          nextPageError={nextPageError}
          getNextPage={fetchNextPage}
        />
      ) : (
        <ContentError />
      )}
    </MainLayout>
  )
}

export default ReleaseCalendar

export const getServerSideProps = async () => {
  return customFetchQuery(
    ['release-calendar-page'],
    PagesServices.getReleaseCalendar
  )
}
