import { FC } from 'react'
import styled from 'styled-components'

interface IMetacriticScoreProps {
  score: number
  size?: number
  fontSize?: number
}

const MetacriticScore: FC<IMetacriticScoreProps> = ({
  score,
  size = 25,
  fontSize = 14,
}) => {
  return (
    <Wrapper score={score} size={size} fontSize={fontSize}>
      {score}
    </Wrapper>
  )
}

export default MetacriticScore

const Wrapper = styled.div<Required<IMetacriticScoreProps>>(
  ({ score, size, fontSize }) => ({
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    width: size + 'px',
    height: size + 'px',
    borderRadius: '3px',
    fontSize: fontSize + 'px',
    lineHeight: '150%',
    fontWeight: 'bold',
    color: '#faf8ea',
    boxShadow: '0 0 2px 1px rgb(27 27 27 / 35%)',
    backgroundColor:
      score < 50
        ? 'rgba(159, 0, 0, 0.9)'
        : score < 75
        ? 'rgba(157, 124, 8, 0.9)'
        : 'rgba(79, 151, 44, 0.9)',
  })
)
