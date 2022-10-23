import { FC } from 'react'
import Link from 'next/link'

import Sticker, { IStickerProps } from 'components/shared/Sticker'

type WithLinkProps = IStickerProps & {
  link: string
  externalLink?: never
}
type WithExternalLinkProps = IStickerProps & {
  externalLink: string
  link?: never
}
type StickerWithLinkProps = WithLinkProps | WithExternalLinkProps

const StickerWithLink: FC<StickerWithLinkProps> = ({
  link,
  externalLink,
  Icon,
  iconSize,
  children,
}) => {
  return (
    <>
      {link && (
        <Link href={link}>
          <a>
            <Sticker Icon={Icon} iconSize={iconSize}>
              {children}
            </Sticker>
          </a>
        </Link>
      )}

      {externalLink && (
        <a href={externalLink} target="_blank" rel="noreferrer">
          <Sticker Icon={Icon} iconSize={iconSize}>
            {children}
          </Sticker>
        </a>
      )}
    </>
  )
}

export default StickerWithLink
