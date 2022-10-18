import { FC } from 'react'
import Link from 'next/link'

import { IGameGenre } from '@appTypes/cards.types'
import { ROUTES } from '@constants/routes.constants'
import { TruncatedList } from '@components/shared'
import styles from './GenresList.module.css'

interface IGenresListProps {
  genresList: IGameGenre[]
  maxWidth: number
}

const GenresList: FC<IGenresListProps> = ({ genresList, maxWidth }) => {
  return (
    <TruncatedList
      className={styles.genresList}
      style={{ maxWidth }}
      renderTruncator={({ hiddenItemsCount }) => (
        <div className={styles.genreItemTrunc}>+{hiddenItemsCount}</div>
      )}
    >
      {genresList.map(({ id, name }) => (
        <div className={styles.genreItem} key={id}>
          <Link href={`${ROUTES.GENRES}/${id}`}>{name}</Link>
        </div>
      ))}
    </TruncatedList>
  )
}

export default GenresList
