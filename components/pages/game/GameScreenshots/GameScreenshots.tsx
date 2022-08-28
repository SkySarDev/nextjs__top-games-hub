import type { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { IGameScreenshot } from '@appTypes/gamePage.types'
import { GameSectionTitle } from '@components/pages/game'
import { ContentSection } from '@styles/components'

interface IProps {
  screenshots: IGameScreenshot[]
  gameName: string
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`
const ImageWrapper = styled.div`
  position: relative;
  height: 184px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #59584c;
  background-color: #1b1b1b;
`
const ScreenImg = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;
  object-fit: cover;

  &:hover {
    opacity: 1;
  }
`

const GameScreenshots: FC<IProps> = ({ screenshots, gameName }) => {
  return (
    <ContentSection>
      <GameSectionTitle bottom={15}>Screenshots</GameSectionTitle>
      <Grid>
        {screenshots.map((screenItem) => (
          <ImageWrapper key={screenItem.id}>
            <ScreenImg
              src={screenItem.image}
              width={333}
              height={182}
              alt={gameName}
            />
          </ImageWrapper>
        ))}
      </Grid>
    </ContentSection>
  )
}

export default GameScreenshots
