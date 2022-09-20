import { FC } from 'react'
import styled from 'styled-components'

import { MainHead } from '@components/layout'
import { ContentHeader, ContentWrapper } from '@components/content'
import { InfoText } from '@styles/components/content.components'

interface IContentErrorProps {
  statusCode?: number | string
  statusText?: string
}

const ContentError: FC<IContentErrorProps> = ({
  statusCode = '',
  statusText,
}) => {
  const title = `Error ${statusCode}`
  const message =
    statusText || 'Oops. Something went wrong... Please try again later.'

  return (
    <>
      <MainHead title={title} description={message} />
      <ContentHeader />

      <ContentWrapper title="">
        <Text>{title}</Text>
        <Text>{message}</Text>
      </ContentWrapper>
    </>
  )
}

export default ContentError

const Text = styled(InfoText)`
  :not(:last-child) {
    margin-bottom: 15px;
  }
`
