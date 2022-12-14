export const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 60 * 60 * 1000,
      cacheTime: 5 * 60 * 60 * 1000,
    },
  },
}
