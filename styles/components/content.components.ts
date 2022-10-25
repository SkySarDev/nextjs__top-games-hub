import styled from 'styled-components'

export const BlockWrapper = styled.div`
  background: rgba(36, 38, 33, 0.8);
  border: 1px solid #59584c;
  padding: 10px;

  @media (min-width: 440px) {
    padding: 15px;
  }

  @media (min-width: 1080px) {
    padding: 20px;
  }
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media (min-width: 440px) {
    grid-gap: 15px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
`

export const ContentRows = styled.div`
  display: grid;
  row-gap: 10px;

  @media (min-width: 440px) {
    grid-gap: 15px;
  }

  @media (min-width: 1080px) {
    row-gap: 20px;
  }
`

export const AbsoluteDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const InfoText = styled.p`
  font-size: 24px;
  font-weight: bold;
  line-height: 130%;
  text-align: center;
`
