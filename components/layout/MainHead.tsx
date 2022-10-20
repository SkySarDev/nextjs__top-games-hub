import { FC } from 'react'
import Head from 'next/head'

import { DEFAULT_TITLE } from '@constants/common.constants'

interface IMainHeadProps {
  title?: string
  description?: string
}

const MainHead: FC<IMainHeadProps> = ({ title, description }) => {
  const fullTitle = title ? `${title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE

  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}

export default MainHead
