import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { PagesServices } from '@services/pages.services'
import { customFetchQuery } from '@utils/fetch.utils'
import { ContentError } from '@components/content'
import { CategoryContentTemplate } from '@components/pages/common'

const TagPage: NextPage = () => {
  const { query } = useRouter()
  const tagId = query.tagid as string
  const { data } = useQuery(['tag-by-id', tagId], () =>
    PagesServices.getTagById(tagId)
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

export default TagPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const tagId = ctx.query.tagid as string

  return await customFetchQuery(['tag-by-id', tagId], () =>
    PagesServices.getTagById(tagId)
  )
}
