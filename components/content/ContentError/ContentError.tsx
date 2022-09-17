import { FC } from 'react'
import styled from 'styled-components'

import { MainHead } from '@components/layout'
import { ContentHeader, ContentWrapper } from '@components/content'

interface IContentErrorProps {
  statusCode?: number
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

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  line-height: 130%;
  text-align: center;

  :not(:last-child) {
    margin-bottom: 15px;
  }
`
