import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { IPageWithBgImage } from '@appTypes/pages.types'
import { ICardGame } from '@appTypes/cards.types'
import { MainLayout } from '@components/layout'
import { ContentError } from '@components/content'
import { CategoryContentTemplate } from '@components/pages/common'

const DeveloperPage: NextPage<IPageWithBgImage> = ({ bgImage }) => {
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
    <MainLayout
      title={data?.title}
      description={data?.description_raw}
      bgImage={bgImage}
    >
      {data ? (
        <CategoryContentTemplate
          description={data.description}
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

export default DeveloperPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const developerId = ctx.query.developerid as string

  return await customFetchQuery(['developer-by-id', developerId], () =>
    PagesServices.getDeveloperById(developerId)
  )
}
