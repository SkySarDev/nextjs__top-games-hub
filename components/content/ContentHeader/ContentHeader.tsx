import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { CardAbsoluteDiv } from '@styles/components'

interface IContentHeaderProps {
  image?: string | null
}

const ContentHeader: FC<IContentHeaderProps> = ({ image }) => {
  const headerImage = image || '/images/default-header-image.jpg'

  return (
    <Header>
      <BgImage src={headerImage} layout="fill" objectFit="cover" priority />
      <BgGradient />
    </Header>
  )
}

export default ContentHeader

const Header = styled.header`
  position: fixed;
  top: 15px;
  width: 1120px;
  height: 630px;

  @media (max-width: 1200px) {
    width: 880px;
    height: 495px;
  }
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
