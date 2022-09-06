import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { IGameScreenshot } from '@appTypes/gamePage.types'
import { ContentSection } from '@components/content'

interface IGameScreenshotsProps {
  screenshots: IGameScreenshot[]
  gameName: string
}

const GameScreenshots: FC<IGameScreenshotsProps> = ({
  screenshots,
  gameName,
}) => {
  return (
    <ContentSection title="Screenshots">
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

  :hover {
    opacity: 1;
  }
`
