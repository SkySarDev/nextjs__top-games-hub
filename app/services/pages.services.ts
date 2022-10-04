import { request } from '@services/api.services'

import { IHomePageResponse } from '@appTypes/homePage.types'
import {
  IGamesPageResponse,
  IGamePageResponse,
} from '@appTypes/gamesPage.types'
import {
  ICategoryContentResponse,
  ICategoryListResponse,
  ISearchContentResponse,
} from '@appTypes/pages.types'
import { ROUTES } from '@constants/routes.constants'

const {
  GAMES,
  GENRES,
  HOME,
  PLATFORMS,
  TAGS,
  DEVELOPERS,
  PUBLISHERS,
  SEARCH,
  RELEASE_CALENDAR,
} = ROUTES

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

  async getDevelopers(): Promise<ICategoryListResponse> {
    return request({ url: DEVELOPERS, method: 'GET' })
  },

  async getDeveloperById(id: string): Promise<ICategoryContentResponse> {
    return request({ url: `${DEVELOPERS}/${id}`, method: 'GET' })
  },

  async getPublishers(): Promise<ICategoryListResponse> {
    return request({ url: PUBLISHERS, method: 'GET' })
  },

  async getPublisherById(id: string): Promise<ICategoryContentResponse> {
    return request({ url: `${PUBLISHERS}/${id}`, method: 'GET' })
  },

  async getSearchResults(text: string): Promise<ISearchContentResponse> {
    return request({ url: `${SEARCH}/${text}`, method: 'GET' })
  },

  async getReleaseCalendar(): Promise<IGamesPageResponse> {
    return request({ url: RELEASE_CALENDAR, method: 'GET' })
  },

  async getReleaseCalendarByDate(date: string): Promise<IGamesPageResponse> {
    return request({ url: `${RELEASE_CALENDAR}/${date}`, method: 'GET' })
  },
}
