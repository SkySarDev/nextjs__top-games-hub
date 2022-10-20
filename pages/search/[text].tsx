import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { PagesServices } from '@services/pages.services'
import { useCustomQuery } from '@hooks/useCustomQuery'
import { useInfiniteData } from '@hooks/useInfiniteData'
import { ISearchContentResponse } from '@appTypes/pages.types'
import { ICardGame } from '@appTypes/cards.types'
import { ContentError } from '@components/content'
import { SearchContent } from '@components/pages/search'
import { MainLayout } from '@components/layout'

const SearchPage: NextPage = () => {
  const { query } = useRouter()
  const searchText = query.text as string
  const { data, isLoading, error } = useCustomQuery<ISearchContentResponse>(
    ['search-page', searchText],
    () => PagesServices.getSearchResults(searchText)
  )
  const { list, setList, nextPage, setNextPage, nextPageError, fetchNextPage } =
    useInfiniteData<ICardGame>({
      initList: [],
      initNextPage: null,
    })

  useEffect(() => {
    if (data) {
      setList(data.games_list)
      setNextPage(data.next_page)
    }
  }, [data, setList, setNextPage])

  return (
    <MainLayout title={`Search results for: ${searchText}`}>
      {error ? (
        <ContentError statusText={error?.message} />
      ) : (
        <SearchContent
          isLoading={isLoading}
          gamesList={list}
          nextPage={nextPage}
          nextPageError={nextPageError}
          getNextPage={fetchNextPage}
        />
      )}
    </MainLayout>
  )
}

export default SearchPage
