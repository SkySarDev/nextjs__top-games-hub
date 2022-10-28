import { FC, PropsWithChildren, useState, useEffect } from 'react'
import styled from 'styled-components'
import { RiCloseCircleFill } from 'react-icons/ri'

interface IBaseModalProps extends PropsWithChildren {
  isShow: boolean
  hideModal: () => void
}

const BaseModal: FC<IBaseModalProps> = ({ isShow, hideModal, children }) => {
  const [visible, setVisible] = useState('')

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        setVisible('visible')
        document.body.classList.add('noscroll')
      })
    }
  }, [isShow])

  const onClose = () => {
    setVisible('')
    document.body.classList.remove('noscroll')

    setTimeout(hideModal, 300)
  }

  return (
    <>
      {isShow && (
        <Wrapper onClick={onClose} className={visible}>
          <CloseBtn>
            <RiCloseCircleFill />
          </CloseBtn>
          {children}
        </Wrapper>
      )}
    </>
  )
}

export default BaseModal

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s;

  &.visible {
    opacity: 1;
  }
`
const CloseBtn = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 30px;
  line-height: 0;
  background-color: transparent;
  color: #59584c;
  cursor: pointer;
  transition: color 0.3s;

  :hover {
    color: #8b8b81;
  }

  @media (min-width: 440px) {
    top: 30px;
    right: 30px;
  }

  @media (min-width: 768px) {
    top: 50px;
    right: 50px;
    font-size: 40px;
  }
`
