import type { NextPage } from 'next'

import { ICardGame } from '@appTypes/cards.types'
import { CardGame } from '@components/cards'

interface ICardGamesListWithDataProps {
  list: ICardGame[]
}

const CardGamesListWithData: NextPage<ICardGamesListWithDataProps> = ({
  list,
}) => {
  return (
    <>
      {list.map((item) => (
        <CardGame data={item} key={item.name} />
      ))}
    </>
  )
}

export default CardGamesListWithData
