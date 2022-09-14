import { ICardGame } from '@appTypes/cards.types'
import { IBaseCategoryItem } from '@appTypes/base.types'

export interface ICategoryContentResponse {
  title: string
  description: string
  description_raw: string
  background_image: string
  games_count: number
  games_list: ICardGame[]
}

export interface ICategoryListResponse {
  title: string
  description: string
  background_image: string
  list: IBaseCategoryItem[]
}

export type PageCategories = 'genres' | 'tags' | 'platforms'
