import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoteInterface from "./interfaces/NoteInterface"
import Home from "./pages/Home"
import AddNote from "./pages/AddNote"
import NoPage from "./pages/NoPage"
import EditNote from "./pages/EditNote"

const App = () => {
  const sampleNotes: NoteInterface[] = [
    {
      id: "1",
      title: "title 1",
      noteDetails: "noteDetails 1",
      category: "home",
      date: "2022-07-15",
    },
    {
      id: "2",
      title: "title 2",
      noteDetails: "noteDetails 2",
      category: "work",
      date: "2022-07-19",
    },
    {
      id: "3",
      title: "title 3",
      noteDetails: "noteDetails 3",
      category: "home",
      date: "2022-07-23",
    },
    {
      id: "4",
      title: "title 4",
      noteDetails:
        "noteDetails 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident a vitae iusto corrupti at quia sint minima ad recusandae veniam!",
      category: "home",
      date: "2022-07-26",
    },
    {
      id: "5",
      title: "title 5",
      noteDetails: "noteDetails 5",
      category: "work",
      date: "2022-08-27",
    },
    {
      id: "6",
      title: "title 1",
      noteDetails: "noteDetails 1",
      category: "home",
      date: "2022-07-15",
    },
    {
      id: "7",
      title: "title 2",
      noteDetails: "noteDetails 2",
      category: "work",
      date: "2022-07-19",
    },
    {
      id: "8",
      title: "title 3",
      noteDetails: "noteDetails 3",
      category: "home",
      date: "2022-07-23",
    },
    {
      id: "9",
      title: "title 4",
      noteDetails:
        "noteDetails 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident a vitae iusto corrupti at quia sint minima ad recusandae veniam!",
      category: "home",
      date: "2022-07-26",
    },
    {
      id: "10",
      title: "title 5",
      noteDetails: "noteDetails 5",
      category: "work",
      date: "2022-08-27",
    },
    {
      id: "11",
      title: "title 1",
      noteDetails: "noteDetails 1",
      category: "home",
      date: "2022-07-15",
    },
    {
      id: "12",
      title: "title 2",
      noteDetails: "noteDetails 2",
      category: "work",
      date: "2022-07-19",
    },
    {
      id: "13",
      title: "title 3",
      noteDetails: "noteDetails 3",
      category: "home",
      date: "2022-07-23",
    },
    {
      id: "15",
      title: "title 4",
      noteDetails:
        "noteDetails 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident a vitae iusto corrupti at quia sint minima ad recusandae veniam!",
      category: "home",
      date: "2022-07-26",
    },
    {
      id: "16",
      title: "title 5",
      noteDetails: "noteDetails 5",
      category: "work",
      date: "2022-08-27",
    },
    {
      id: "17",
      title: "title 1",
      noteDetails: "noteDetails 1",
      category: "home",
      date: "2022-07-15",
    },
  ]

  const [categories, setCategories] = useState<string[]>([
    // "home",
    // "work",
    // "home",
    // "work",
    // "home",
    // "work",
    // "home",
    // "work",
  ])

  // TODO setnote if adding note so that added note is saved if clicked on back mistakenly
  // const [note, setNote] = useState<NoteInterface>({
  //   id: "",
  //   title: "",
  //   noteDetails: "",
  //   date: "",
  //   category: "",
  // })

  const [notes, setNotes] = useState<NoteInterface[]>(sampleNotes)
  const [filteredNotes, setFilteredNotes] = useState<NoteInterface[]>([])

  useEffect(() => {
    setFilteredNotes(notes)
  }, [notes])

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          index
          element={
            <Home
              categories={categories}
              notes={notes}
              setNotes={setNotes}
              filteredNotes={filteredNotes}
              setFilteredNotes={setFilteredNotes}
            />
          }
        />
        <Route
          path="add-note"
          element={
            <AddNote
              categories={categories}
              setCategories={setCategories}
              notes={notes}
              setNotes={setNotes}
            />
          }
        />
        <Route
          path="edit-note/:noteId"
          element={
            <EditNote
              categories={categories}
              setCategories={setCategories}
              notes={notes}
              setNotes={setNotes}
            />
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
