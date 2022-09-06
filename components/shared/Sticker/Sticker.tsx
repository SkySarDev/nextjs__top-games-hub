import { FC, ReactNode } from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

interface IStickerProps {
  Icon: IconType
  iconSize: number
  children: ReactNode
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
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  border-radius: 5px;
  background-color: rgba(211, 203, 192, 0.85);
  color: #000;
  padding: 5px 8px;
  transition: background-color 0.35s;

  :hover {
    background-color: rgba(211, 203, 192, 0.6);
  }
`
