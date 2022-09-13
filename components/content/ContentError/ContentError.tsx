import { FC } from 'react'

import { MainHead } from '@components/layout'
import { ContentHeader, ContentWrapper } from '@components/content'

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

      <ContentWrapper title="Error">{message}</ContentWrapper>
    </>
  )
}

export default ContentError
