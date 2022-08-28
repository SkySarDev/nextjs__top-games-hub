import type { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { IBaseBlock } from '@appTypes/base.types'
import { ROUTES } from '@constants/routes.constants'

interface IProps {
  array: IBaseBlock[]
  queryParam: string
}

const ArrayItem = styled.span`
  &:not(:last-child) {
    margin-right: 3px;
    &:after {
      content: ', ';
    }
  }
`

const GameInfoValueList: FC<IProps> = ({ array, queryParam }) => {
  return (
    <>
      {array.map(({ id, name }) => (
        <ArrayItem key={name}>
          <Link href={`${ROUTES.GAMES}?${queryParam}=${id}`}>{name}</Link>
        </ArrayItem>
      ))}
    </>
  )
}

export default GameInfoValueList
