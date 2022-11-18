import { FC } from 'react'
import Head from 'next/head'

import { DEFAULT_TITLE } from '@constants/common.constants'

interface IMainHeadProps {
  title?: string
  description?: string
  robots?: 'all' | 'none' | 'noindex' | 'nofollow'
}

const MainHead: FC<IMainHeadProps> = ({
  title,
  description,
  robots = 'none',
}) => {
  const fullTitle = title ? `${title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE

  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={robots} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}

export default MainHead
