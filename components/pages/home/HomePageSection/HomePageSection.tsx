import { ReactNode, FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { ContentGrid } from '@styles/components/content.components'

interface IHomePageSectionProps {
  link: string
  title: string
  children: ReactNode
}

const HomePageSection: FC<IHomePageSectionProps> = ({
  link,
  title,
  children,
}) => {
  return (
    <>
      <Title>
        <Link href={link}>{title}</Link>
      </Title>

      <ContentGrid>{children}</ContentGrid>
    </>
  )
}

export default HomePageSection

const Title = styled.h2`
  margin: 0 0 10px 5px;
  font-size: 22px;
  line-height: 120%;
  font-weight: bold;

  a {
    color: #e2e0d0;
    transition: color 0.3s;

    :hover {
      color: #999;
    }
  }
`
