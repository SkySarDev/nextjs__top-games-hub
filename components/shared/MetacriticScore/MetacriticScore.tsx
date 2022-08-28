import type { NextPage } from 'next'
import styled from 'styled-components'

interface IMetacriticScoreProps {
  score: number
  size?: number
  fontSize?: number
}

const Wrapper = styled.div<IMetacriticScoreProps>(
  ({ score, size, fontSize }) => ({
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '100%',
    width: size + 'px',
    height: size + 'px',
    borderRadius: '5px',
    fontSize: fontSize + 'px',
    fontWeight: 'bold',
    color: '#faf8ea',
    boxShadow: '0 0 2px 1px rgb(27 27 27 / 35%)',
    backgroundColor:
      score < 50 ? '#9f0000' : score < 75 ? '#9d7c08' : '#4f972c',
  })
)

const MetacriticScore: NextPage<IMetacriticScoreProps> = ({
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
