import type { NextPage } from 'next'
import Head from 'next/head'

interface IMainHeadProps {
  title: string
  description: string
}

const MainHead: NextPage<IMainHeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title} - Top Games Hub</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}

export default MainHead
