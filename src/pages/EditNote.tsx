import React, { useState, ChangeEvent, useEffect } from "react"
import styled from "styled-components"
import NoteInterface from "../interfaces/NoteInterface"
import { useNavigate, useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import AddCategory from "../components/AddCategory"

interface Props {
  notes: NoteInterface[]
  setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
  categories: string[]
  setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

const EditNote = (props: Props) => {
  const { categories, setCategories, notes, setNotes } = props

  const navigate = useNavigate()

  const { noteId } = useParams()

  const note: NoteInterface = notes.find((note) => note.id === noteId)!

  useEffect(() => {
    !note && navigate("/add-note")
  }, [])

  const [title, setTitle] = useState<string>(note ? note.title : "")
  const [noteDetails, setNoteDetails] = useState<string>(
    note ? note.noteDetails : ""
  )
  const [date, setDate] = useState<string>(note ? note.date : "")
  const [category, setCategory] = useState<string>(note ? note.category : "")
  const [addCategoryPopup, setAddCategoryPopup] = useState<boolean>(false)

  const titleHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value)
  }

  const noteDetailsHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNoteDetails(event.currentTarget.value)
  }

  const dateHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setDate(event.currentTarget.value)
  }

  const categoryHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    setCategory(event.currentTarget.value)
  }

  const saveNoteHandler = (): void => {
    if (title && noteDetails && date && category) {
      setNotes(
        notes.map((note) =>
          note.id === noteId
            ? { ...note, title, noteDetails, date, category }
            : note
        )
      )
      navigate("/")
    }
  }

  return (
    <Container>
      <BackButton navigateTo="/" />
      <input type="text" value={title} onChange={titleHandler} />
      <textarea value={noteDetails} onChange={noteDetailsHandler}></textarea>
      <input type="date" value={date} onChange={dateHandler} />
      <select onChange={categoryHandler} value={category}>
        {categories.map((category, key) => (
          <option key={key} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => setAddCategoryPopup(!addCategoryPopup)}>
        Add category
      </button>
      <button onClick={saveNoteHandler}>Save</button>
      <button onClick={() => navigate("/")}>Cancel</button>
      {addCategoryPopup && (
        <AddCategory
          setParentCategory={setCategory}
          categories={categories}
          setCategories={setCategories}
          setAddCategoryPopup={setAddCategoryPopup}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default EditNote
