import type { NextPage } from 'next'

import { ICardCommon } from '@appTypes/cards.types'
import { CardCommon } from '@components/cards'

interface ICardCommonsListWithDataProps {
  list: Omit<ICardCommon, 'category'>[]
  category: 'genres' | 'tags'
}

const CardCommonsListWithData: NextPage<ICardCommonsListWithDataProps> = ({
  list,
  category,
}) => {
  return (
    <>
      {list.map((item) => {
        return <CardCommon data={item} category={category} key={item.name} />
      })}
    </>
  )
}

export default CardCommonsListWithData
