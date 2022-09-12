import { ICardGame } from '@appTypes/cards.types'
import { IBaseCommonItem } from '@appTypes/base.types'

export interface ITagsDto {
  background_image: string
  tags: IBaseCommonItem[]
}

export interface ITagDto {
  name: string
  description: string
  description_raw: string
  background_image: string
  games_count: number
  games_list: ICardGame[]
}
