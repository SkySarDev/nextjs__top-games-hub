export interface IBaseDataBlock {
  id: number
  name: string
  slug: string
}

export interface IBaseCategoryItem extends IBaseDataBlock {
  games_count: number
  image_background: string
}

export interface IErrorResponse {
  status: number
  message: string
}
