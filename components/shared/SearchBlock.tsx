import { ChangeEvent, FormEvent, useState, FC } from 'react'
import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

import { ROUTES } from '@constants/routes.constants'

interface ISearchBlockProps {
  showIcon?: boolean
}

const SearchBlock: FC<ISearchBlockProps> = ({ showIcon = false }) => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const value = inputValue.trim()

    if (value) {
      router.push(`${ROUTES.SEARCH}/${value}`)
      setInputValue('')
    }
  }

  return (
    <Form onSubmit={formSubmitHandler}>
      <SearchInput
        type="text"
        placeholder="Search game"
        value={inputValue}
        onChange={inputChangeHandler}
      />

      {showIcon && (
        <Button>
          <FaSearch />
        </Button>
      )}
    </Form>
  )
}

export default SearchBlock

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 10px;
  height: 35px;
  font-size: 18px;
  border: 1px solid #59584c;
  padding: 0 10px;
  margin-bottom: 3px;
  background-color: #1b1b1b;
`
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  color: #999;
  background-color: transparent;
`
const Button = styled.button`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #999;
  opacity: 0.7;
  cursor: pointer;
`
