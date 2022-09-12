import type { NextPage } from 'next'
import Link from 'next/link'

import { IGameGenre } from '@appTypes/cards.types'
import { ROUTES } from '@constants/routes.constants'
import { TruncatedList } from '@components/shared'
import styles from './GenresList.module.css'

interface IProps {
  genresList: IGameGenre[]
  maxWidth: number
}

const GenresList: NextPage<IProps> = ({ genresList, maxWidth }) => {
  return (
    <TruncatedList
      className={styles.genresList}
      style={{ maxWidth }}
      renderTruncator={({ hiddenItemsCount }) => (
        <div className={styles.genreItemTrunc}>+{hiddenItemsCount}</div>
      )}
    >
      {genresList.map((genreItem) => {
        const { id, name } = genreItem

        return (
          <div className={styles.genreItem} key={id}>
            <Link href={`${ROUTES.GENRES}/${id}`}>{name}</Link>
          </div>
        )
      })}
    </TruncatedList>
  )
}

export default GenresList
