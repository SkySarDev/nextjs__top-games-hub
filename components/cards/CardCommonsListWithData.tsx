import { FC } from 'react'

import { ICardCommon } from '@appTypes/cards.types'
import { CardCommon } from '@components/cards/index'

interface ICardCommonsListWithDataProps {
  list: Omit<ICardCommon, 'category'>[]
  category: 'genres' | 'tags'
}

const CardCommonsListWithData: FC<ICardCommonsListWithDataProps> = ({
  list,
  category,
}) => {
  return (
    <>
      {list.map((item) => (
        <CardCommon data={item} category={category} key={item.name} />
      ))}
    </>
  )
}

export default CardCommonsListWithData
