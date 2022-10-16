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

const PlatformPage: NextPage<IPageWithBgImage> = ({ bgImage }) => {
  const { query } = useRouter()
  const platformId = query.platformid as string
  const { data } = useQuery(['platform-by-id', platformId], () =>
    PagesServices.getPlatformById(platformId)
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

export default PlatformPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const platformId = ctx.query.platformid as string

  return await customFetchQuery(['platform-by-id', platformId], () =>
    PagesServices.getPlatformById(platformId)
  )
}
