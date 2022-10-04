import { useState } from 'react'
import { PagesServices } from '@services/pages.services'

interface IInfiniteDataProps<T> {
  initNextPage?: string | null
  initList?: T[]
}

interface IReturnedData<T> {
  list: T[]
  nextPage: string | null
  nextPageError: boolean
  fetchNextPage: () => void
}

export function useInfiniteData<T>({
  initNextPage = null,
  initList = [],
}: IInfiniteDataProps<T>): IReturnedData<T> {
  const [nextPage, setNextPage] = useState<string | null>(initNextPage)
  const [list, setList] = useState<any[]>(initList)
  const [nextPageError, setNextPageError] = useState(false)

  const fetchNextPage = async () => {
    if (nextPage) {
      try {
        const nextPageData = await PagesServices.getNextPage(nextPage)
        const { list, next_page } = nextPageData

        if (!list) {
          throw Error()
        }

        setNextPage(next_page)
        setList((prevState) => [...prevState, ...list])
      } catch (err) {
        setNextPageError(true)
      }
    }
  }

  return { list, nextPage, nextPageError, fetchNextPage }
}
