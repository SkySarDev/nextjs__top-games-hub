import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { IBgImage } from '@appTypes/base.types'
import {
  DEFAULT_HEADER_IMAGE,
  DEFAULT_HEADER_BLUR_DATA_URL,
} from '@constants/common.constants'
import { CardAbsoluteDiv } from '@styles/components'

const HeroBackground: FC<Partial<IBgImage>> = ({ image, blurDataURL }) => {
  const img = image || DEFAULT_HEADER_IMAGE
  const blur = blurDataURL || DEFAULT_HEADER_BLUR_DATA_URL

  return (
    <Wrapper>
      <BgImage
        src={img}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={blur}
        priority
      />
      <BgGradient />
    </Wrapper>
  )
}

export default HeroBackground

const Wrapper = styled.header`
  position: fixed;
  top: 50px;
  width: 1170px;
  height: 650px;
  z-index: -1;
`
const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
`
const BgGradient = styled(CardAbsoluteDiv)`
  content: '';
  background: radial-gradient(
      50% 150% at 50% 50%,
      rgba(27, 27, 27, 0) 0%,
      rgba(27, 27, 27, 0.8) 80%,
      #1b1b1b 100%
    ),
    radial-gradient(
      150% 50% at 50% 50%,
      rgba(27, 27, 27, 0) 0%,
      rgba(27, 27, 27, 0.8) 80%,
      #1b1b1b 100%
    );
`
