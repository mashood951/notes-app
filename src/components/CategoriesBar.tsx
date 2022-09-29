import React, { useState } from "react"
import { MdOutlineBookmarkAdd, MdOutlineBookmarkRemove } from "react-icons/md"
import styled from "styled-components"
import { ButtonStyles, properties } from "../GlobalStyles"
import NoteInterface from "../interfaces/NoteInterface"
import CategoryBar from "./CategoryBar"
import Hamburger from "./Hamburger"

interface Props {
  categories: string[]
  notes: NoteInterface[]
  setFilteredNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
}

const CategoriesBar = (props: Props) => {
  const { categories, notes, setFilteredNotes } = props

  const [activeCategory, setActiveCategory] = useState<string>("")

  return (
    <Container>
      <Categories>
        {categories.map((category, key) => (
          <CategoryBar
            key={key}
            category={category}
            notes={notes}
            setFilteredNotes={setFilteredNotes}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </Categories>
      {/* <CategoryButtons>
        <Button>
          <MdOutlineBookmarkAdd />
        </Button>
        <Button>
          <MdOutlineBookmarkRemove />
        </Button>
      </CategoryButtons> */}
      <Hamburger />
    </Container>
  )
}

const Container = styled.div`
  width: 95vw;
  margin: auto;
  padding: 10px 0;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Categories = styled.div`
  display: flex;
  overflow-x: auto;
  width: 90%;

  /* can add swipe like left and right to see previous or next categories */

  &::-webkit-scrollbar {
    display: none;
  }
`

const CategoryButtons = styled.div`
  display: flex;
`

const Button = styled(ButtonStyles)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: 5px;
  font-size: 18px;
`

export default CategoriesBar
