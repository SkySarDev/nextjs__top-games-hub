import styled from 'styled-components'

interface ICardBaseWrapperProps {
  height: number
}

export const CardBaseWrapper = styled.div<ICardBaseWrapperProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height}px;
  border: 1px solid #59584c;
  background-color: #1b1b1b;
  overflow: hidden;
`
