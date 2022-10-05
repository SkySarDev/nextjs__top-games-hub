import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { useInfiniteData } from '@hooks/useInfiniteData'
import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { ICardGame } from '@appTypes/cards.types'
import { ContentError } from '@components/content'
import { GamesContent } from '@components/pages/games'

const ReleaseCalendar: NextPage = () => {
  const { data } = useQuery(
    ['release-calendar-page'],
    PagesServices.getReleaseCalendar
  )
  const { list, nextPage, nextPageError, fetchNextPage } =
    useInfiniteData<ICardGame>({
      initList: data?.games_list,
      initNextPage: data?.next_page,
    })

  return (
    <>
      {data ? (
        <GamesContent
          title={data.title}
          description={data.description}
          background_image={data.background_image}
          games_count={data.games_count}
          games_list={list}
          next_page={nextPage}
          nextPageError={nextPageError}
          getNextPage={fetchNextPage}
        />
      ) : (
        <ContentError />
      )}
    </>
  )
}

export default ReleaseCalendar

export const getServerSideProps = async () => {
  return customFetchQuery(
    ['release-calendar-page'],
    PagesServices.getReleaseCalendar
  )
}
