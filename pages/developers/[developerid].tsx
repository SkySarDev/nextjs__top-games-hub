import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { ContentError } from '@components/content'
import { CategoryContentTemplate } from '@components/pages/common'

const DeveloperPage: NextPage = () => {
  const { query } = useRouter()
  const developerId = query.developerid as string
  const { data } = useQuery(['developer-by-id', developerId], () =>
    PagesServices.getDeveloperById(developerId)
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

export default DeveloperPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const developerId = ctx.query.developerid as string

  return await customFetchQuery(['developer-by-id', developerId], () =>
    PagesServices.getDeveloperById(developerId)
  )
}
