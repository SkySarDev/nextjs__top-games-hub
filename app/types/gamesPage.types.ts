import { IBaseDataBlock } from '@appTypes/base.types'
import { ICardGame } from '@appTypes/cards.types'

export interface IGameScreenshot {
  id: number
  image: string
}

export interface IGameDto {
  id: number
  slug: string
  name: string
  description: string
  description_raw: string
  playtime: number
  released: string
  background_image: string | null
  website: string
  metacritic: number | null
  genres: IBaseDataBlock[]
  platforms: IBaseDataBlock[]
  developers: IBaseDataBlock[]
  publishers: IBaseDataBlock[]
  tags: IBaseDataBlock[]
  screenshots: IGameScreenshot[]
}

export interface IGamesDto {
  background_image: string
  games_count: number
  games: ICardGame[]
}