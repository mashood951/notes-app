// import React, { ChangeEvent, useState } from "react"
// import uuid from "react-uuid"
// import styled from "styled-components"
// import TodoInterface from "../interfaces/TodoInterface"
// import Todo from "./Todo"

// interface Props {
//   todos: TodoInterface[]
//   setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>
// }

// const Todos = (props: Props) => {
//   const { todos, setTodos } = props

//   const [newTodo, setNewTodo] = useState<TodoInterface>({
//     id: uuid(),
//     done: false,
//     todoText: "",
//   })

//   const clickHandler = (): void => {
//     setNewTodo({ id: uuid(), done: false, todoText: "" })
//     const previousTodo = todos[todos.length - 1]
//     if (!todos.length || previousTodo?.id) {
//       setTodos([...todos, { id: "", done: false, todoText: "" }])
//     }
//   }

//   const addTodoHandler = (todo: TodoInterface): void => {}

//   return (
//     <Container>
//       <div>Todos:</div>
//       <button onClick={clickHandler}>add</button>
//       <div>
//         {todos.map((todo, key) => (
//           <Todo
//             key={key}
//             todo={todo}
//             newTodo={newTodo}
//             setNewTodo={setNewTodo} /* todoHandler={addTodoHandler} */
//           />
//         ))}
//       </div>
//     </Container>
//   )
// }

// const Container = styled.div``

// export default Todos
