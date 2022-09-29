import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react"
import { MdOutlineAddCircleOutline } from "react-icons/md"
import styled from "styled-components"
import { ButtonStyles, colors, InputStyles, properties } from "../GlobalStyles"

interface Props {
  setParentCategory: React.Dispatch<React.SetStateAction<string>>
  categories: string[]
  setCategories: React.Dispatch<React.SetStateAction<string[]>>
  setAddCategoryPopup: React.Dispatch<React.SetStateAction<boolean>>
  isActive?: boolean
}

const AddCategory = (props: Props) => {
  const {
    setParentCategory,
    categories,
    setCategories,
    setAddCategoryPopup,
    isActive,
  } = props

  const [category, setCategory] = useState<string>("")

  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const categoryHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.currentTarget.value)
  }

  const categoryKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === "Enter" && buttonRef.current?.click()
  }

  const addCategoryHandler = (): void => {
    inputRef.current?.reportValidity()
    if (category) {
      setParentCategory(category)
      setCategory("")
      setCategories([...categories, category])
      setAddCategoryPopup(false)
    }
  }

  useEffect(() => {
    isActive && inputRef.current?.focus()
  }, [isActive])

  return (
    <Container {...props}>
      <Input
        ref={inputRef}
        type="text"
        required={isActive && !categories.length}
        value={category}
        onChange={categoryHandler}
        onKeyDown={categoryKeyHandler}
      />
      <Button ref={buttonRef} type="button" onClick={addCategoryHandler}>
        <MdOutlineAddCircleOutline />
        <span>Add</span>
      </Button>
    </Container>
  )
}

const Container = styled.div<Props>`
  position: absolute;
  top: 100%;
  right: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.buttonBg};
  box-shadow: 0 0 0 ${properties.highlightSize} ${colors.buttonBg};
  border-radius: ${properties.borderRadius};
  transition: all ${properties.secondaryTransitionTime};
  transform: ${(props) => (props.isActive ? "scale(1)" : "scale(0)")};
  transform-origin: top right;
  overflow: hidden;
`

const Input = styled(InputStyles)`
  flex: 1;
  padding: 10px;
  border-radius: 15px;
`

const Button = styled(ButtonStyles)`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 5px;
  padding-bottom: 0;
  font-size: 16px;

  & span {
    margin-left: 2px;
  }
`

export default AddCategory
