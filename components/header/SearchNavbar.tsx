import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

import { useActiveClass } from '@hooks/useActiveClass'
import { SearchBlock } from '@components/shared'

const SearchNavbar = () => {
  const { isActive, toggleActiveClass } = useActiveClass('active', true)

  return (
    <Wrapper onClick={toggleActiveClass}>
      <FaSearch />

      <SearchWrapper className={isActive} onClick={(e) => e.stopPropagation()}>
        <SearchBlock />
      </SearchWrapper>
    </Wrapper>
  )
}

export default SearchNavbar

const Wrapper = styled.div`
  position: relative;
  font-size: 22px;
  padding-top: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`
const SearchWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: -41px;
  width: 250px;
  height: auto;
  max-height: 0;
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  &.active {
    max-height: 35px;
    box-shadow: 0 3px 5px 3px rgba(27, 27, 27, 0.5);
  }
`
