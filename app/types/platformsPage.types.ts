import { IBaseDataBlock } from '@appTypes/base.types'
import { ICardGame } from '@appTypes/cards.types'

interface IPlatformItem extends IBaseDataBlock {
  games_count: number
  image_background: string
}

export interface IPlatformsDto {
  background_image: string
  platforms: IPlatformItem[]
}

export interface IPlatformDto {
  name: string
  description: string
  background_image: string
  games_count: number
  games_list: ICardGame[]
}
