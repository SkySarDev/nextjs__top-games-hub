import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { MainLayout } from '@components/layout'
import { ContentError } from '@components/content'
import { GameContent } from '@components/pages/games'

const GamePage: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { query } = useRouter()
  const gameId = query.gameid as string
  const { data } = useQuery(['game-by-id', gameId], () =>
    PagesServices.getGameById(gameId)
  )

  return (
    <MainLayout
      title={data?.name}
      description={data?.description_raw}
      bgImage={bgImage}
    >
      {data ? <GameContent data={data} /> : <ContentError />}
    </MainLayout>
  )
}

export default GamePage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const gameId = ctx.query.gameid as string

  return await customFetchQuery(['game-by-id', gameId], () =>
    PagesServices.getGameById(gameId)
  )
}
