import { ICardGame, ICardCommon } from '@appTypes/cards.types'

export interface IHomeDto {
  newReleases: ICardGame[]
  popularGenres: ICardCommon[]
  topGames: ICardGame[]
  tags: ICardCommon[]
}
