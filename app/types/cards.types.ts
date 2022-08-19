export interface IGameGenre {
  id: number
  name: string
  slug: string
}

export interface ICardGame {
  name: string
  slug: string
  background_image: string | null
  genres: IGameGenre[]
  released: string
  metacritic: number | null
}

export interface ICardCommon {
  id: number
  name: string
  games_count: number
  image_background: string
}
