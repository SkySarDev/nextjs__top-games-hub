import styled from 'styled-components'

export interface IMainTitleProps {
  top?: number
  bottom?: number
}

export const MainTitle = styled.h2<IMainTitleProps>`
  font-size: 22px;
  font-weight: bold;
  margin-top: ${({ top }) => top || 0}px;
  margin-bottom: ${({ bottom }) => bottom || 0}px;
`

export const ContentSection = styled.div`
  border: 1px solid #59584c;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.35);
  padding: 15px 20px;
`

export const CardAbsoluteDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`
