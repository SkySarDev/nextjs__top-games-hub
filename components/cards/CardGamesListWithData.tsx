import { FC } from 'react'

import { ICardGame } from '@appTypes/cards.types'
import { CardGame } from '@components/cards/index'

interface ICardGamesListWithDataProps {
  list: ICardGame[]
}

const CardGamesListWithData: FC<ICardGamesListWithDataProps> = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <CardGame data={item} key={item.name} />
      ))}
    </>
  )
}

export default CardGamesListWithData
