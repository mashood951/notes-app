import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled, { css } from "styled-components"
import NotesList from "../components/NotesList"
import { colors, properties, StickyButton } from "../GlobalStyles"
import NoteInterface from "../interfaces/NoteInterface"
import { MdOutlineNoteAdd, MdOutlinePostAdd } from "react-icons/md"
import CategoriesBar from "../components/CategoriesBar"

interface Props {
  categories: string[]
  notes: NoteInterface[]
  setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
  filteredNotes: NoteInterface[]
  setFilteredNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
}

interface StyledProps {
  isActive: boolean
}

const Home = (props: Props) => {
  const { categories, notes, setNotes, filteredNotes, setFilteredNotes } = props

  const [isActive, setIsActive] = useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      isActive && navigate("/add-note")
    }, parseInt(properties.transitionTime) /*  + 100 */)
  }, [isActive])

  return (
    <Container>
      <CategoriesBar
        categories={categories}
        notes={notes}
        setFilteredNotes={setFilteredNotes}
      />
      <NotesList
        notes={notes}
        setNotes={setNotes}
        filteredNotes={filteredNotes}
      />
      <AddButton
        title="Add Note"
        onClick={() => setIsActive(true)}
        isActive={isActive}
      >
        <MdOutlinePostAdd />
      </AddButton>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.primaryBg};
  min-height: 100vh;
`

const AddButton = styled(StickyButton)<StyledProps>`
  bottom: ${properties.stickyButtonPos};
  right: calc(
    ${properties.stickyButtonPos} - (${properties.stickyButtonPos} / 2)
  );

  ${(props) =>
    props.isActive &&
    css`
      bottom: 0;
      right: 0;
      font-size: 100px;
    `}
`

export default Home
