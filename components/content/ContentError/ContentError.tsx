import { FC } from 'react'

import { MainHead } from '@components/layout'
import { ContentHeader, ContentMain } from '@components/content'

interface IContentErrorProps {
  statusText?: string
}

const ContentError: FC<IContentErrorProps> = ({ statusText }) => {
  const message =
    statusText || 'Oops. Something went wrong... Please try again later.'

  return (
    <>
      <MainHead title="Error" description="Error" />
      <ContentHeader />

      <ContentMain title="Error">{message}</ContentMain>
    </>
  )
}

export default ContentError
