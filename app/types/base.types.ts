export interface IBaseDataBlock {
  id: number
  name: string
  slug: string
}

export interface IBaseCommonItem extends IBaseDataBlock {
  games_count: number
  image_background: string
}
