import styled from 'styled-components'

interface ICardBaseWrapperProps {
  maxHeight: number
  sizeRatio: number
}

export const CardBaseWrapper = styled.div<ICardBaseWrapperProps>`
  position: relative;
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight}px;
  aspect-ratio: 1 / ${({ sizeRatio }) => sizeRatio};
  border: 1px solid #59584c;
  background-color: #1b1b1b;
  overflow: hidden;
`

export const SkeletonLine = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #484848;
  color: #484848;
  height: 100%;

  :before {
    content: '';
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      #606060 50%,
      transparent 100%
    );
    animation: load 1s infinite;

    @keyframes load {
      from {
        left: -100%;
      }
      to {
        left: 100%;
      }
    }
  }
`
