import type { AppProps } from 'next/app'
import { useState } from 'react'
import {
  QueryClientProvider,
  Hydrate,
  QueryClient,
} from '@tanstack/react-query'

import { queryClientConfig } from '@configs/reactQuery.configs'
import '@configs/nprogress.configs'
import { IErrorResponse } from '@appTypes/base.types'
import { MainLayout } from '@components/layout'
import { ContentError } from '@components/content'
import '@styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig))

  if (pageProps.isError) {
    const error = pageProps.isError as IErrorResponse

    return (
      <MainLayout title={`Error ${error.status}`}>
        <ContentError statusText={error.message} />
      </MainLayout>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
