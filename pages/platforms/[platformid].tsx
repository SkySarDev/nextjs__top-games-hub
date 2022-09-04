import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { ContentError } from '@components/content'
import { PlatformContent } from '@components/pages/platforms'

const PlatformPage: NextPage = () => {
  const { query } = useRouter()
  const platformId = query.platformid as string
  const { data } = useQuery(['platform-by-id', platformId], () =>
    PagesServices.getPlatformById(platformId)
  )

  // prettier-ignore
  return <>
    {data ? (
      <PlatformContent platformData={data} />
    ) : (
      <ContentError />
    )}
  </>
}

export default PlatformPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const platformId = ctx.query.platformid as string

  return await customFetchQuery(['platform-by-id', platformId], () =>
    PagesServices.getPlatformById(platformId)
  )
}
