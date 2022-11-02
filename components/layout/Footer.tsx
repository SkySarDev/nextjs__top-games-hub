import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <span>Database provided by</span>{' '}
      <a href="https://rawg.io" target="_blank" rel="noreferrer">
        RAWG.io
      </a>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  padding: 20px 0;
  text-align: center;

  a {
    color: #d3cbc0;
    font-weight: bold;
    transition: color 0.3s;

    :hover {
      color: #b3b1a9;
    }
  }
`
