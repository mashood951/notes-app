import React from "react"
import NoteInterface from "../interfaces/NoteInterface"

const Note = (props: NoteInterface) => {
  const { id, noteDetails, title, date, category } = props

  return (
    <div>
      <div>{id}</div>
      <div>{noteDetails}</div>
      <div>{title}</div>
      <div>{date}</div>
      <div>{category}</div>
    </div>
  )
}

export default Note
