import { FC } from 'react'
import Head from 'next/head'

import { DEFAULT_TITLE } from '@constants/common.constants'

interface IMainHeadProps {
  title?: string
  description?: string
  noindex?: boolean
}

const MainHead: FC<IMainHeadProps> = ({
  title,
  description,
  noindex = false,
}) => {
  const fullTitle = title ? `${title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE

  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}

export default MainHead
