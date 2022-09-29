// import React, { ChangeEvent, useEffect, useState } from "react"
// import uuid from "react-uuid"
// import styled from "styled-components"
// import TodoInterface from "../interfaces/TodoInterface"
// import Todo from "./Todo"

// interface Props {
//   todos: TodoInterface[]
//   setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>
//   deleteHandler: () => void
// }

// const Todos = (props: Props) => {
//   const { todos, setTodos, deleteHandler } = props

//   const [newTodo, setNewTodo] = useState<TodoInterface>({
//     id: uuid(),
//     done: false,
//     todoText: "",
//   })

//   const clickHandler = (): void => {
//     newTodo.todoText && setTodos([...todos, newTodo])
//   }

//   const addNewTodo = (done: boolean, todoText: string): void => {}

//   // useEffect(() => {
//   //   // setTimeout(() => {
//   //   setNewTodo({ id: uuid(), done: false, todoText: "" })
//   //   // }, 1000)
//   // }, [todos])

//   // const addTodoHandler = (todo: TodoInterface): void => {}

//   return (
//     <Container>
//       <div>Todos:</div>
//       <button type="button" onClick={deleteHandler}>
//         add
//       </button>
//       <div>
//         {todos.map((todo, key) => (
//           <Todo
//             key={key}
//             todo={todo}
//             newTodo={newTodo}
//             setNewTodo={setNewTodo}
//             todos={todos}
//             setTodos={setTodos}
//             mode="edit"
//             todoHandler={addNewTodo}
//           />
//         ))}
//         <Todo
//           todo={{ id: "", done: false, todoText: "" }}
//           newTodo={newTodo}
//           setNewTodo={setNewTodo}
//           todos={todos}
//           setTodos={setTodos}
//           mode="add"
//           todoHandler={addNewTodo}
//           /* todoHandler={addTodoHandler} */
//         />
//       </div>
//     </Container>
//   )
// }

// const Container = styled.div``

// export default Todos
