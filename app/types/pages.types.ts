import { ICardGame, ICardCommon } from '@appTypes/cards.types'

export interface ISearchContentResponse {
  games_count: number
  games_list: ICardGame[]
}

export interface ICategoryContentResponse {
  title: string
  background_image: string
  games_count: number
  games_list: ICardGame[]
  next_page: string | null
  description: string
  description_raw: string
}

export interface ICategoryListResponse {
  title: string
  description: string
  background_image: string
  list: ICardCommon[]
  next_page: string | null
}

export interface INextPageResponse {
  list: ICardGame[] | ICardCommon[]
  next_page: string | null
}

export type PageCategories =
  | 'genres'
  | 'tags'
  | 'platforms'
  | 'developers'
  | 'publishers'
