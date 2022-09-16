import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { ContentError } from '@components/content'
import { CategoryContentTemplate } from '@components/pages/common'

const PublisherPage: NextPage = () => {
  const { query } = useRouter()
  const publisherId = query.publisherid as string
  const { data } = useQuery(['publisher-by-id', publisherId], () =>
    PagesServices.getPublisherById(publisherId)
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

export default PublisherPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const publisherId = ctx.query.publisherid as string

  return await customFetchQuery(['publisher-by-id', publisherId], () =>
    PagesServices.getPublisherById(publisherId)
  )
}
