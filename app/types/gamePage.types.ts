import { IBaseDataBlock } from '@appTypes/base.types'

export interface IGameScreenshot {
  id: number
  image: string
}

export interface IGame {
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
