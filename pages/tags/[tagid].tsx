import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { useInfiniteData } from '@hooks/useInfiniteData'
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
  const { list, nextPage, nextPageError, fetchNextPage } = useInfiniteData({
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

export default TagPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const tagId = ctx.query.tagid as string

  return await customFetchQuery(['tag-by-id', tagId], () =>
    PagesServices.getTagById(tagId)
  )
}
