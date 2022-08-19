import type { NextPage } from 'next'
import Image from 'next/image'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { CardAbsoluteDiv } from '@styles/components'

interface ICardWrapperProps {
  bgImage: string | null
  width: number
  height: number
  children: ReactNode
}

interface IWrapperDivProps {
  height: number
}

const Wrapper = styled.div<IWrapperDivProps>`
  position: relative;
  height: ${({ height }) => height}px;
  border: 1px solid #59584c;
  border-radius: 5px;
  background-color: #1b1b1b;
`

const BackgroundImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`

const BackgroundGradient = styled(CardAbsoluteDiv)`
  background: linear-gradient(
    180deg,
    rgba(27, 27, 27, 0) 0%,
    rgba(27, 27, 27, 0.85) 65%,
    #1b1b1b 85%
  );
`

const Hover = styled(CardAbsoluteDiv)`
  content: '';
  transition: background 0.35s;
  background-color: transparent;
  background-position: center 30%;
  background-repeat: no-repeat;
  background-size: 0;

  &:hover {
    background-color: rgba(27, 27, 27, 85%);
    background-image: url('/images/icons/eye-preview.svg');
    background-size: 70px;

    h3 {
      transition: color 0.35s;
      color: #999999;
    }
  }
`

const CardWrapper: NextPage<ICardWrapperProps> = ({
  bgImage,
  width,
  height,
  children,
}) => {
  const image = bgImage || '/images/card-no-image.png'

  return (
    <Wrapper height={height + 2}>
      <BackgroundImage src={image} width={width} height={height} />
      <BackgroundGradient />
      <Hover>{children}</Hover>
    </Wrapper>
  )
}

export default CardWrapper
