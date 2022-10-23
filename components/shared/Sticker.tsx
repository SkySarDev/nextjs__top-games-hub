import { FC, PropsWithChildren } from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

export interface IStickerProps extends PropsWithChildren {
  Icon: IconType
  iconSize: number
}

const Sticker: FC<IStickerProps> = ({ Icon, iconSize, children }) => {
  return (
    <Wrapper>
      <Icon fontSize={iconSize} />
      {children}
    </Wrapper>
  )
}

export default Sticker

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  height: 100%;
  border-radius: 3px;
  background-color: rgba(211, 203, 192, 0.85);
  color: #000;
  padding: 5px 8px;
  transition: background-color 0.35s;
  cursor: pointer;

  :hover {
    background-color: rgba(211, 203, 192, 0.6);
  }
`
