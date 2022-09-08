import type { AppProps } from 'next/app'
import { useState } from 'react'
import {
  QueryClientProvider,
  Hydrate,
  QueryClient,
} from '@tanstack/react-query'

import { queryClientConfig } from '@configs/reactQuery.configs'
import { MainLayout } from '@components/layout'
import { ContentError } from '@components/content'
import '@styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig))

  if (pageProps.isError) {
    return (
      <MainLayout>
        <ContentError statusText={pageProps.isError} />
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
