import { NextPage } from 'next'

import { ContentError } from '@components/content'

const Custom404: NextPage = () => {
  return <ContentError statusCode={404} statusText="Page not found" />
}

export default Custom404
