import type { AppProps } from 'next/app'
import { useState } from 'react'
import {
  QueryClientProvider,
  Hydrate,
  QueryClient,
} from '@tanstack/react-query'

import { queryClientConfig } from '@configs/reactQuery.configs'
import '@configs/nprogress.configs'
import { MainLayout } from '@components/layout'
import { ContentError } from '@components/content'
import '@styles/globals.css'
import { IErrorResponse } from '@appTypes/base.types'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig))

  if (pageProps.isError) {
    const error = pageProps.isError as IErrorResponse

    return (
      <MainLayout>
        <ContentError statusCode={error.status} statusText={error.message} />
      </MainLayout>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
