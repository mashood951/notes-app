// import React, { ChangeEvent, useEffect, useState } from "react"
// import styled from "styled-components"
// import TodoInterface from "../interfaces/TodoInterface"

// interface Props {
//   todo: TodoInterface
//   newTodo: TodoInterface
//   setNewTodo: React.Dispatch<React.SetStateAction<TodoInterface>>
//   // todoHandler: (todo: TodoInterface) => void
// }

// const Todo = (props: Props) => {
//   const { todo, newTodo, setNewTodo } = props

//   const [done, setDone] = useState<boolean>(todo.done)
//   const [todoText, setTodoText] = useState<string>(todo.todoText)

//   const checkboxHandler = (event: ChangeEvent<HTMLInputElement>): void => {
//     setDone(event.currentTarget.checked)
//   }

//   const inputHandler = (event: ChangeEvent<HTMLTextAreaElement>): void => {
//     setTodoText(event.currentTarget.value)
//   }

//   useEffect(() => {
//     setNewTodo({ ...newTodo, done, todoText })
//   }, [done, todoText])

//   return (
//     <Container>
//       <input type="checkbox" checked={done} onChange={checkboxHandler} />
//       <textarea rows={1} value={todoText} onChange={inputHandler}></textarea>
//     </Container>
//   )
// }

// const Container = styled.div``

// export default Todo
