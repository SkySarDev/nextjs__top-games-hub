import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { useScreenshotModal } from '@context/ScreenshotModal'
import { IGameScreenshot } from '@appTypes/gamesPage.types'
import { ContentSection } from '@components/content'
import { GameScreenshotModal } from '@components/pages/games'

interface IGameScreenshotsProps {
  screenshots: IGameScreenshot[]
  gameName: string
}

const GameScreenshots: FC<IGameScreenshotsProps> = ({
  screenshots,
  gameName,
}) => {
  const { showModal } = useScreenshotModal()

  return (
    <>
      <ContentSection title="Screenshots">
        <Grid>
          {screenshots.map(({ id, image }) => (
            <ScreenWrapper
              key={id}
              onClick={() => showModal({ image, alt: gameName })}
            >
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt={gameName}
              />
              <ScreenBlackout />
            </ScreenWrapper>
          ))}
        </Grid>
      </ContentSection>

      <GameScreenshotModal />
    </>
  )
}

export default GameScreenshots

const Grid = styled.div`
  display: grid;
  gap: 15px;
`
const ScreenWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 0.55;
  object-fit: cover;
  border: 1px solid #59584c;
`
const ScreenBlackout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #1b1b1b;
  opacity: 0.4;
  transition: opacity 0.3s;

  :hover {
    opacity: 0;
  }
`
