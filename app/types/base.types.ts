export interface IBaseDataBlock {
  id: number
  name: string
  slug: string
}

export interface IErrorResponse {
  status: number
  message: string
}

export interface IBgImage {
  image: string
  blurDataURL: string
}
