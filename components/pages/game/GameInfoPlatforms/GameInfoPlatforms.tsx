import React, { FC } from 'react'
import Link from 'next/link'
import { IconContext } from 'react-icons'

import { IBaseDataBlock } from '@appTypes/base.types'
import { ROUTES } from '@constants/routes.constants'
import { platformsIcons } from '@constants/platformsIcons.constants'

interface IProps {
  platforms: IBaseDataBlock[]
}

const GameInfoPlatforms: FC<IProps> = ({ platforms }) => {
  return (
    <IconContext.Provider value={{ size: '25' }}>
      {platforms.map(({ id, slug }) => {
        const Icon = platformsIcons[slug]

        return (
          <Link href={`${ROUTES.PLATFORMS}/${id}`} key={id}>
            <a>
              <Icon />
            </a>
          </Link>
        )
      })}
    </IconContext.Provider>
  )
}

export default GameInfoPlatforms
