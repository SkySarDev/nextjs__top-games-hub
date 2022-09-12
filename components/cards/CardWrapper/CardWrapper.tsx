import { ReactNode, FC } from 'react'
import Image from 'next/image'
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

const CardWrapper: FC<ICardWrapperProps> = ({
  bgImage,
  width,
  height,
  children,
}) => {
  const image = bgImage || '/images/card-no-image.png'

  return (
    <Wrapper height={height + 2}>
      <BgImage src={image} width={width} height={height} />
      <BgGradient />
      <Hover>{children}</Hover>
    </Wrapper>
  )
}

export default CardWrapper

const Wrapper = styled.div<IWrapperDivProps>`
  position: relative;
  height: ${({ height }) => height}px;
  border: 1px solid #59584c;
  border-radius: 5px;
  background-color: #1b1b1b;
  overflow: hidden;
`
const BgImage = styled(Image)`
  position: absolute;
  object-fit: cover;
`
const BgGradient = styled(CardAbsoluteDiv)`
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
