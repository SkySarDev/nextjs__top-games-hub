import { ICardGame, ICardCommon } from '@appTypes/cards.types'

export interface IHomePageResponse {
  title: string
  description: string
  new_releases: ICardGame[]
  popular_genres: ICardCommon[]
  top_games: ICardGame[]
  tags: ICardCommon[]
}
