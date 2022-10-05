import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { ICardGame } from '@appTypes/cards.types'
import { ContentError } from '@components/content'
import { CategoryContentTemplate } from '@components/pages/common'

const DeveloperPage: NextPage = () => {
  const { query } = useRouter()
  const developerId = query.developerid as string
  const { data } = useQuery(['developer-by-id', developerId], () =>
    PagesServices.getDeveloperById(developerId)
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

export default DeveloperPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const developerId = ctx.query.developerid as string

  return await customFetchQuery(['developer-by-id', developerId], () =>
    PagesServices.getDeveloperById(developerId)
  )
}
