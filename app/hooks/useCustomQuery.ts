import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { QueryFunction } from '@tanstack/query-core'

import { IErrorResponse } from '@appTypes/base.types'

interface IReturnedData<TResponse> {
  data: TResponse
  isLoading: boolean
  error: IErrorResponse | null
}

export function useCustomQuery<T>(
  queryKey: string[],
  queryFn: QueryFunction
): IReturnedData<T> {
  const [error, setError] = useState<IErrorResponse | null>(null)
  const { data: result, isLoading } = useQuery(queryKey, queryFn, {
    onError: (err: IErrorResponse) => {
      const { status, message } = err

      setError({
        status,
        message,
      })
    },
  })

  const data = result as T

  return { data, isLoading, error }
}
