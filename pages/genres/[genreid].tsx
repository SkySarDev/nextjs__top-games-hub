import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { ICardGame } from '@appTypes/cards.types'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { ContentError } from '@components/content'
import { CategoryContentTemplate } from '@components/pages/common'

const GenrePage: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { query } = useRouter()
  const genreId = query.genreid as string
  const { data } = useQuery(['genre-by-id', genreId], () =>
    PagesServices.getGenreById(genreId)
  )
  const { list, nextPage, nextPageError, fetchNextPage } =
    useInfiniteData<ICardGame>({
      initList: data?.games_list,
      initNextPage: data?.next_page,
    })

  return (
    <>
      {data ? (
        <CategoryContentTemplate
          title={data.title}
          description={data.description}
          description_raw={data.description_raw}
          games_count={data.games_count}
          games_list={list}
          next_page={nextPage}
          nextPageError={nextPageError}
          getNextPage={fetchNextPage}
          bgImage={bgImage}
        />
      ) : (
        <ContentError />
      )}
    </>
  )
}

export default GenrePage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const genreId = ctx.query.genreid as string

  return await customFetchQuery(['genre-by-id', genreId], () =>
    PagesServices.getGenreById(genreId)
  )
}
