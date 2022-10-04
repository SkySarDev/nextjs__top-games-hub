import { ICardGame } from '@appTypes/cards.types'
import { IBaseCategoryItem } from '@appTypes/base.types'

export interface ISearchContentResponse {
  games_count: number
  games_list: ICardGame[]
}

export interface ICategoryContentResponse {
  title: string
  background_image: string
  games_count: number
  games_list: ICardGame[]
  description: string
  description_raw: string
}

export interface ICategoryListResponse {
  title: string
  description: string
  background_image: string
  list: IBaseCategoryItem[]
}

export interface INextPageResponse {
  list: ICardGame[]
  next_page: string | null
}

export type PageCategories =
  | 'genres'
  | 'tags'
  | 'platforms'
  | 'developers'
  | 'publishers'
