import { ICardGame } from '@appTypes/cards.types'
import { IBaseDataBlock } from '@appTypes/base.types'

interface IGenreItem extends IBaseDataBlock {
  games_count: number
  image_background: string
}

export interface IGenresDto {
  background_image: string
  genres: IGenreItem[]
}

export interface IGenreDto {
  name: string
  description: string
  description_raw: string
  background_image: string
  games_count: number
  games_list: ICardGame[]
}
