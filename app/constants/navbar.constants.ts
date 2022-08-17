import { ROUTES } from '@constants/routes.constants'

import home from '@public/images/icons/home.svg'
import games from '@public/images/icons/games.svg'
import genres from '@public/images/icons/genres.svg'
import tags from '@public/images/icons/tags.svg'
import calendar from '@public/images/icons/calendar.svg'
import platforms from '@public/images/icons/platforms.svg'
import developers from '@public/images/icons/developers.svg'
import publishers from '@public/images/icons/publishers.svg'

export const NAVBAR_LIST = [
  { link: ROUTES.ROOT, name: 'Home page', icon: home },
  { link: ROUTES.GAMES, name: 'All games', icon: games },
  { link: ROUTES.GENRES, name: 'Genres', icon: genres },
  { link: ROUTES.TAGS, name: 'Game tags', icon: tags },
  {
    link: ROUTES.RELEASE_CALENDAR,
    name: 'Release calendar',
    icon: calendar,
  },
  {
    link: ROUTES.PLATFORMS,
    name: 'Platforms',
    icon: platforms,
  },
  {
    link: ROUTES.DEVELOPERS,
    name: 'Developers',
    icon: developers,
  },
  {
    link: ROUTES.PUBLISHERS,
    name: 'Publishers',
    icon: publishers,
  },
]
