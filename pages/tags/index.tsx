import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { ContentError } from '@components/content'
import { TagsContent } from '@components/pages/tags'

const Tags: NextPage = () => {
  const { data } = useQuery(['tags-page'], PagesServices.getTags)

  // prettier-ignore
  return (
    <>
      {data ? (
        <TagsContent tagsData={data} />
      ) : (
        <ContentError />
      )}
    </>
  )
}

export default Tags

export const getServerSideProps = async () => {
  return customFetchQuery(['tags-page'], PagesServices.getTags)
}
