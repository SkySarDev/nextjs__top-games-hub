import styled from 'styled-components'

export interface IMainTitleProps {
  top?: number
  bottom?: number
}

export const MainTitle = styled.h2<IMainTitleProps>`
  font-size: 22px;
  line-height: 150%;
  font-weight: bold;
  margin-top: ${({ top = 0 }) => top}px;
  margin-bottom: ${({ bottom = 0 }) => bottom}px;
`

export const CardAbsoluteDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`
