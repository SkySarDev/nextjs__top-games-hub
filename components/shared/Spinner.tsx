import { FC } from 'react'
import styled from 'styled-components'

interface ISpinnerProps {
  width?: number
  height?: number
}

const Spinner: FC<ISpinnerProps> = ({ width, height }) => {
  return (
    <SvgSpinner viewBox="0 0 50 50" width={width} height={height}>
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </SvgSpinner>
  )
}

export default Spinner

const SvgSpinner = styled.svg<ISpinnerProps>`
  animation: rotate 1s linear infinite;
  width: ${({ width = 30 }) => width}px;
  height: ${({ height = 30 }) => height}px;

  & .path {
    stroke: #e2e0d0;
    stroke-linecap: round;
    animation: dash 1.2s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
