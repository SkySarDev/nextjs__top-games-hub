import { NextPage } from 'next'

import { ContentError } from '@components/content'
import { MainLayout } from '@components/layout'

const Custom404: NextPage = () => {
  return (
    <MainLayout title={`Error 404`}>
      <ContentError statusText="Page not found" />
    </MainLayout>
  )
}

export default Custom404
