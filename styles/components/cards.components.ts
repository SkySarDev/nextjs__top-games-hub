import styled from 'styled-components'

interface ICardBaseWrapperProps {
  height: number
}

export const CardBaseWrapper = styled.div<ICardBaseWrapperProps>`
  position: relative;
  height: ${({ height }) => height}px;
  border: 1px solid #59584c;
  border-radius: 5px;
  background-color: #1b1b1b;
  overflow: hidden;
`
