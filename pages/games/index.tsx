import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { ContentError } from '@components/content'
import { GamesContent } from '@components/pages/games'
import { useInfiniteData } from '@hooks/useInfiniteData'

const Games: NextPage = () => {
  const { data } = useQuery(['games-page'], PagesServices.getGames)
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
          background_image={data.background_image}
          games_count={data.games_count}
          games_list={list}
          getNextPage={fetchNextPage}
          next_page={nextPage}
          nextPageError={nextPageError}
        />
      ) : (
        <ContentError />
      )}
    </>
  )
}

export default Games

export const getServerSideProps = async () => {
  return await customFetchQuery(['games-page'], PagesServices.getGames)
}
