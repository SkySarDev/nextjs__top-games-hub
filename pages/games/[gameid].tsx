import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { ContentError } from '@components/content'
import { GameContent } from '@components/pages/games'

const GamePage: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { query } = useRouter()
  const gameId = query.gameid as string
  const { data } = useQuery(['game-by-id', gameId], () =>
    PagesServices.getGameById(gameId)
  )

  // prettier-ignore
  return (
    <>
      {data ? (
        <GameContent data={data} bgImage={bgImage} />
      ) : (
        <ContentError />
      )}
    </>
  )
}

export default GamePage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const gameId = ctx.query.gameid as string

  return await customFetchQuery(['game-by-id', gameId], () =>
    PagesServices.getGameById(gameId)
  )
}
