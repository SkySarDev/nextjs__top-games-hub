import { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { DEFAULT_CARD_NO_IMAGE } from '@constants/common.constants'
import { AbsoluteDiv } from '@styles/components/content.components'
import { CardBaseWrapper } from '@styles/components/cards.components'

interface ICardWrapperProps extends PropsWithChildren {
  bgImage: string | null
  maxHeight: number
  sizeRatio: number
}

const CardWrapper: FC<ICardWrapperProps> = ({
  bgImage,
  maxHeight,
  sizeRatio,
  children,
}) => {
  const image = bgImage || DEFAULT_CARD_NO_IMAGE

  return (
    <CardBaseWrapper maxHeight={maxHeight} sizeRatio={sizeRatio}>
      <BgImage src={image} layout="fill" objectFit="cover" />
      <BgGradient />
      <Hover>{children}</Hover>
    </CardBaseWrapper>
  )
}

export default CardWrapper

const BgImage = styled(Image)`
  position: absolute;
`
const BgGradient = styled(AbsoluteDiv)`
  background: linear-gradient(
    180deg,
    rgba(27, 27, 27, 0) 0%,
    rgba(27, 27, 27, 0.85) 65%,
    #1b1b1b 85%
  );
`
const Hover = styled(AbsoluteDiv)`
  content: '';
  transition: background 0.35s;
  background-color: transparent;
  background-position: center 30%;
  background-repeat: no-repeat;
  background-size: 0;

  :hover {
    background-color: rgba(27, 27, 27, 85%);
    background-image: url('/images/icons/eye-preview.svg');
    background-size: 70px;

    h3 {
      transition: color 0.35s;
      color: #999;
    }
  }
`
