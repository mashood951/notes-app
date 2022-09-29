// import React, { ChangeEvent, useEffect, useState } from "react"
// import uuid from "react-uuid"
// import styled from "styled-components"
// import TodoInterface from "../interfaces/TodoInterface"

// interface Props {
//   todo: TodoInterface
//   newTodo: TodoInterface
//   setNewTodo: React.Dispatch<React.SetStateAction<TodoInterface>>
//   todos: TodoInterface[]
//   setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>
//   mode: "add" | "edit"
//   todoHandler: (done: boolean, todoText: string) => void
//   // todoHandler: (todo: TodoInterface) => void
// }

// const Todo = (props: Props) => {
//   const { todo, newTodo, setNewTodo, todos, setTodos, mode, todoHandler } =
//     props

//   const [done, setDone] = useState<boolean>(todo.done)
//   const [todoText, setTodoText] = useState<string>(todo.todoText)

//   const checkboxHandler = (event: ChangeEvent<HTMLInputElement>): void => {
//     setDone(event.currentTarget.checked)
//   }

//   const inputHandler = (event: ChangeEvent<HTMLTextAreaElement>): void => {
//     setTodoText(event.currentTarget.value)
//   }

//   // useEffect(() => {
//   //   if (mode === "add") {
//   //     setNewTodo({ ...newTodo, done, todoText })
//   //   } else if (mode === "edit") {
//   //     setTodos(
//   //       todos.map((curTodo) =>
//   //         curTodo.id === todo?.id ? { ...curTodo, done, todoText } : curTodo
//   //       )
//   //     )
//   //     setDone(todo?.done!)
//   //     setTodoText(todo?.todoText!)
//   //   }
//   // }, [done, todoText])

//   // useEffect(() => {
//   //   if (mode === "add") {
//   //     setNewTodo({ id: uuid(), done: false, todoText: "" })
//   //     setDone(false)
//   //     setTodoText("")
//   //   }
//   //   // } else if (mode === "edit") {
//   //   //   setDone(todo?.done!)
//   //   //   setTodoText(todo?.todoText!)
//   //   // }
//   // }, [todos])

//   return (
//     <Container>
//       <input type="checkbox" checked={done} onChange={checkboxHandler} />
//       <textarea
//         rows={1}
//         value={todoText}
//         onChange={
//           mode === "add" ? () => todoHandler(done, todoText) : inputHandler
//         }
//       ></textarea>
//     </Container>
//   )
// }

// const Container = styled.div``

// export default Todo
