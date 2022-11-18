import styled from 'styled-components'

import { MainHead } from '@components/layout'

const Maintenance = () => {
  return (
    <>
      <MainHead title="Maintenance" robots="noindex" />

      <Text>Sorry! We are under maintenance currently.</Text>
    </>
  )
}

export default Maintenance

const Text = styled.h1`
  margin-top: 100px;
  text-align: center;
`
