import { ChangeEvent, FormEvent, useState, FC } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { ROUTES } from '@constants/routes.constants'

const SearchBlock: FC = () => {
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
        placeholder="Search games"
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <Button>
        <ButtonImg src="/images/icons/search.svg" alt="Search" />
      </Button>
    </Form>
  )
}

export default SearchBlock

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 10px;
  margin: 50px 20px 15px;
  height: 30px;
  border: 1px solid #59584c;
  border-radius: 3px;
  padding: 0 7px;
`
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  border-radius: 3px;
  background-color: transparent;
  color: #999;
`
const Button = styled.button`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`
const ButtonImg = styled.img`
  width: 18px;
  height: 18px;
  opacity: 0.7;
`
