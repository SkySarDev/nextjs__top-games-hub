import styled from 'styled-components'
import Image from 'next/image'
import { useScreenshotModal } from '@context/ScreenshotModal'
import { BaseModal } from '@components/shared'

const GameScreenshotModal = () => {
  const {
    modalState: { isShow, image, alt },
    hideModal,
  } = useScreenshotModal()

  return (
    <BaseModal isShow={isShow} hideModal={hideModal}>
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        <Content>
          <Image src={image} alt={alt} layout="fill" objectFit="cover" />
        </Content>
      </ContentWrapper>
    </BaseModal>
  )
}

export default GameScreenshotModal

const ContentWrapper = styled.div`
  position: relative;
  background: rgba(36, 38, 33, 0.8);
  border: 1px solid #59584c;
  padding: 5px;
  cursor: auto;
  width: 90%;
  aspect-ratio: 1 / 0.55;

  @media (min-width: 440px) {
    padding: 10px;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`
const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #59584c;
`
