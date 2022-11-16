import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Developed by{' '}
        <a href="https://skysar.tech" target="_blank" rel="noreferrer">
          SkySar
        </a>
        .{'  '}
        Database provided by{' '}
        <a href="https://rawg.io" target="_blank" rel="noreferrer">
          RAWG.io
        </a>
      </p>
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
