import { QueryFunction } from '@tanstack/query-core'
import { QueryClient, dehydrate } from '@tanstack/react-query'

import { getBgImage } from '@utils/images.utils'
import { IErrorResponse } from '@appTypes/base.types'

export const customFetchQuery = async (
  queryKey: string[],
  queryFn: QueryFunction<any, string[]>
) => {
  let isError = null
  let dehydratedState = null
  let bgImage = null

  if (!process.env.NEXT_PUBLIC_MAINTENANCE) {
    const queryClient = new QueryClient()

    try {
      await queryClient.fetchQuery(queryKey, queryFn)
    } catch (err: any) {
      isError = err as IErrorResponse
    }

    if (!isError) {
      dehydratedState = dehydrate(queryClient)

      const { background_image } = dehydratedState.queries[0].state.data as {
        background_image: string | null | undefined
      }

      bgImage = await getBgImage(background_image)
    }
  }

  return {
    props: {
      isError,
      dehydratedState,
      bgImage,
    },
  }
}
