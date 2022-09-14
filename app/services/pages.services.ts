import { request } from '@services/api.services'

import { IHomePageResponse } from '@appTypes/homePage.types'
import {
  IGamesPageResponse,
  IGamePageResponse,
} from '@appTypes/gamesPage.types'
import { ROUTES } from '@constants/routes.constants'
import {
  ICategoryContentResponse,
  ICategoryListResponse,
} from '@appTypes/pages.types'

const { GAMES, GENRES, HOME, PLATFORMS, TAGS } = ROUTES

export const PagesServices = {
  async getHome(): Promise<IHomePageResponse> {
    return request({ url: HOME, method: 'GET' })
  },

  async getGames(): Promise<IGamesPageResponse> {
    return request({ url: GAMES, method: 'GET' })
  },

  async getGameById(id: string): Promise<IGamePageResponse> {
    return request({ url: `${GAMES}/${id}`, method: 'GET' })
  },

  async getGenres(): Promise<ICategoryListResponse> {
    return request({ url: GENRES, method: 'GET' })
  },

  async getGenreById(id: string): Promise<ICategoryContentResponse> {
    return request({ url: `${GENRES}/${id}`, method: 'GET' })
  },

  async getPlatforms(): Promise<ICategoryListResponse> {
    return request({ url: PLATFORMS, method: 'GET' })
  },

  async getPlatformById(id: string): Promise<ICategoryContentResponse> {
    return request({ url: `${PLATFORMS}/${id}`, method: 'GET' })
  },

  async getTags(): Promise<ICategoryListResponse> {
    return request({ url: TAGS, method: 'GET' })
  },

  async getTagById(id: string): Promise<ICategoryContentResponse> {
    return request({ url: `${TAGS}/${id}`, method: 'GET' })
  },
}
