import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { PagesServices } from '@services/pages.services'
import { ISearchContentResponse } from '@appTypes/pages.types'
import { ContentError } from '@components/content'
import { SearchContent } from '@components/pages/search'
import { useCustomQuery } from '@hooks/useCustomQuery'

const SearchPage: NextPage = () => {
  const { query } = useRouter()
  const searchText = query.text as string
  const { data, isLoading, error } = useCustomQuery<ISearchContentResponse>(
    ['search-page', searchText],
    () => PagesServices.getSearchResults(searchText)
  )

  // prettier-ignore
  return (
    <>
      {error ? (
        <ContentError statusCode={error.status} statusText={error.message} />
      ) : (
        <SearchContent isLoading={isLoading} searchText={searchText} data={data} />
      )}
    </>
  )
}

export default SearchPage
