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
    <>
      {error ? (
        <ContentError statusCode={error?.status} statusText={error?.message} />
      ) : (
        <SearchContent
          isLoading={isLoading}
          searchText={searchText}
          gamesList={list}
          gamesCount={data?.games_count}
          nextPage={nextPage}
          nextPageError={nextPageError}
          getNextPage={fetchNextPage}
        />
      )}
    </>
  )
}

export default SearchPage
