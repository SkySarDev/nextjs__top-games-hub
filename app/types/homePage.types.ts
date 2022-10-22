import { ICardGame, ICardCommon } from '@appTypes/cards.types'

export interface IHomePageResponse {
  title: string
  description: string
  newReleases: ICardGame[]
  popularGenres: ICardCommon[]
  topGames: ICardGame[]
  tags: ICardCommon[]
}
