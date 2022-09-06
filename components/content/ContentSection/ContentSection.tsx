import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
  title?: string
  titleAlign?: 'center' | 'left' | 'right'
  children: ReactNode
}

const ContentSection: FC<IProps> = ({
  title,
  titleAlign = 'center',
  children,
}) => {
  return (
    <Wrapper>
      {title && <Title titleAlign={titleAlign}>{title}</Title>}

      {children}
    </Wrapper>
  )
}

export default ContentSection

const Wrapper = styled.div`
  border: 1px solid #59584c;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.35);
  padding: 15px 20px;
`
const Title = styled.h3<Pick<IProps, 'titleAlign'>>`
  font-size: 22px;
  font-weight: bold;
  text-align: ${({ titleAlign }) => titleAlign};
  margin-bottom: 15px;
`
