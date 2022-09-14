import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { ContentError } from '@components/content'
import { CategoryContentTemplate } from '@components/pages/common'

const GenrePage: NextPage = () => {
  const { query } = useRouter()
  const genreId = query.genreid as string
  const { data } = useQuery(['genre-by-id', genreId], () =>
    PagesServices.getGenreById(genreId)
  )

  // prettier-ignore
  return (
    <>
      {data ? (
        <CategoryContentTemplate data={data} />
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
