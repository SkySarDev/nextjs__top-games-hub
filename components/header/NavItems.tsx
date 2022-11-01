import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NAV_LIST } from '@constants/navbar.constants'

const NavItems: FC = () => {
  const { pathname } = useRouter()

  return (
    <>
      {NAV_LIST.map(({ link, name }) => {
        const isActive = pathname === link ? 'active' : ''

        return (
          <Link href={link} key={name}>
            <a>
              <li className={isActive}>{name}</li>
            </a>
          </Link>
        )
      })}
    </>
  )
}

export default NavItems
