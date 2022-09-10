import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { ContentError } from '@components/content'
import { GamesContent } from '@components/pages/games'

const Games: NextPage = () => {
  const { data } = useQuery(['games-page'], PagesServices.getGames)

  // prettier-ignore
  return (
    <>
      {data ? (
        <GamesContent gamesData={data} />
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
