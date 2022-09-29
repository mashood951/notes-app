import React, { useState } from "react"
import { MdOutlineDeleteForever } from "react-icons/md"
import styled from "styled-components"
import { colors, properties } from "../GlobalStyles"
import NoteInterface from "../interfaces/NoteInterface"
import NoteTile from "./NoteTile"

interface Props {
  notes: NoteInterface[]
  setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
  filteredNotes: NoteInterface[]
}

interface DeleteButtonProps {
  activeNotes: string[]
  deletedNotes: string[]
}

const NotesList = (props: Props) => {
  const { notes, setNotes, filteredNotes } = props

  const [activeNotes, setActiveNotes] = useState<string[]>([])
  const [deletedNotes, setDeletedNotes] = useState<string[]>([])

  const deleteNoteHandler = (): void => {
    if (activeNotes.length) {
      setDeletedNotes(activeNotes)
      setTimeout(() => {
        setNotes(notes.filter((note) => !activeNotes.includes(note.id)))
        setActiveNotes([])
      }, parseInt(properties.transitionTime) + 100)
    }
  }

  return (
    <Container>
      {filteredNotes.length ? (
        filteredNotes.map((filteredNote, key) => (
          <NoteTile
            key={key}
            {...filteredNote}
            activeNotes={activeNotes}
            setActiveNotes={setActiveNotes}
            deletedNotes={deletedNotes}
            setDeletedNotes={setDeletedNotes}
          />
        ))
      ) : (
        <div>no notes</div>
      )}
      {/* {activeNotes.length ? ( */}
      <DeleteButton
        onClick={deleteNoteHandler}
        activeNotes={activeNotes}
        deletedNotes={deletedNotes}
      >
        <MdOutlineDeleteForever />
        <span>Delete</span>
      </DeleteButton>
      {/* ) : null} */}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  width: 90vw;
  margin: auto;
`

const DeleteButton = styled.button<DeleteButtonProps>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: ${(props) =>
    props.activeNotes.length && !props.deletedNotes.length
      ? "translate(-50%, -20%)"
      : "translate(-50%, 100%)"};

  background-color: ${colors.secondaryBg};
  border: ${properties.highlightSize} solid ${colors.buttonBg};
  /* border-bottom: none; */
  /* border-radius: ${properties.borderRadius} ${properties.borderRadius} 0 0; */
  border-radius: ${properties.borderRadius};
  width: 95%;
  height: 8vh;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${colors.primaryFont};

  font-size: 24px;
  outline: none;
  transition: transform ${properties.transitionTime};
  z-index: 2;

  & span {
    margin-left: 5px;
    font-size: 20px;
  }

  /* &.active {
    transform: translate(-50%, 0);
  } */
`

export default NotesList
