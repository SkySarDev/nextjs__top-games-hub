import { QueryFunction } from '@tanstack/query-core'
import { QueryClient, dehydrate } from '@tanstack/react-query'

export const customFetchQuery = async (
  queryKey: string[],
  queryFn: QueryFunction<any, string[]>
) => {
  const queryClient = new QueryClient()
  let isError = null

  try {
    await queryClient.fetchQuery(queryKey, queryFn)
  } catch (err: any) {
    isError = err.message || 'Unknown error'
  }

  return {
    props: {
      isError,
      dehydratedState: dehydrate(queryClient),
    },
  }
}
