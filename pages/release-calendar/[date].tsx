import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { PagesServices } from '@services/pages.services'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { GamesContent } from '@components/pages/games'
import { ContentError } from '@components/content'

const ReleaseCalendarByDate: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { query } = useRouter()
  const date = query.date as string
  const { data } = useQuery(['release-calendar-by-date', date], () =>
    PagesServices.getReleaseCalendarByDate(date)
  )
  const { list, nextPage, nextPageError, fetchNextPage } = useInfiniteData({
    initList: data?.games_list,
    initNextPage: data?.next_page,
  })

  return (
    <>
      {data ? (
        <GamesContent
          title={data.title}
          description={data.description}
          games_count={data.games_count}
          games_list={list}
          getNextPage={fetchNextPage}
          next_page={nextPage}
          nextPageError={nextPageError}
          bgImage={bgImage}
        />
      ) : (
        <ContentError />
      )}
    </>
  )
}

export default ReleaseCalendarByDate

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const date = ctx.query.date as string

  return await customFetchQuery(['release-calendar-by-date', date], () =>
    PagesServices.getReleaseCalendarByDate(date)
  )
}
