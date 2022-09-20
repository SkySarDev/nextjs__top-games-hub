import styled from 'styled-components'

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`

export const ContentRows = styled.div`
  display: grid;
  row-gap: 20px;
`

export const CardAbsoluteDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const SkeletonLine = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #484848;
  color: #484848;
  border-radius: 3px;
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
