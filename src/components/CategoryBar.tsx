import React from "react"
import styled from "styled-components"
import { ButtonStyles, colors, properties } from "../GlobalStyles"
import NoteInterface from "../interfaces/NoteInterface"

interface Props {
  category: string
  notes: NoteInterface[]
  setFilteredNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
  activeCategory: string
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>
}

const CategoryBar = (props: Props) => {
  const {
    category,
    notes,
    setFilteredNotes,
    activeCategory,
    setActiveCategory,
  } = props

  const clickHandler = (): void => {
    if (activeCategory === category) {
      setActiveCategory("")
      setFilteredNotes(notes)
    } else {
      setActiveCategory(category)
      setFilteredNotes(notes.filter((note) => note.category === category))
    }
  }

  return (
    <Button {...props} onClick={clickHandler}>
      {category}
    </Button>
  )
}

const Button = styled(ButtonStyles)<Props>`
  padding: 8px 16px;
  border-radius: ${properties.borderRadius};
  margin: 0 10px;
  box-shadow: ${(props) =>
    props.activeCategory === props.category
      ? `0 0 0 ${properties.highlightSize} ${colors.buttonBg} inset`
      : "none"};
  transition: box-shadow ${properties.transitionTime};
  background-color: ${colors.secondaryBg};
  color: ${colors.primaryFont};
  cursor: pointer;
`

export default CategoryBar
