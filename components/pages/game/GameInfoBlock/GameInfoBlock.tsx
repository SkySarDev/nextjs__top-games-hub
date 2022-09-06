import type { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { IBaseDataBlock } from '@appTypes/base.types'

interface IGameInfoBlockProps {
  title: string
  content: string | IBaseDataBlock[]
  queryParam?: string
}

const GameInfoBlock: FC<IGameInfoBlockProps> = ({
  title,
  content,
  queryParam,
}) => {
  const isArray = Array.isArray(content)

  return (
    <div>
      <Title>{title}</Title>
      <Body>
        {isArray ? (
          <>
            {content.map(({ id, name }) => (
              <ArrayItem key={name}>
                <Link href={`${queryParam}/${id}`}>{name}</Link>
              </ArrayItem>
            ))}
          </>
        ) : (
          content
        )}
      </Body>
    </div>
  )
}

export default GameInfoBlock

const Title = styled.h5`
  font-size: 18px;
`
const Body = styled.div`
  margin-bottom: 10px;
  color: #999999;
  a {
    color: #999999;
    transition: color 0.3s;
    :hover {
      color: #e2e0d0;
    }
  }
  :last-child {
    margin-bottom: 0;
  }
`
const ArrayItem = styled.span`
  :not(:last-child) {
    :after {
      content: '●';
      padding: 0 5px;
    }
  }
`
