// import React, { useState, ChangeEvent, useRef, SyntheticEvent } from "react"
// import styled, { css } from "styled-components"
// import NoteInterface from "../interfaces/NoteInterface"
// import uuid from "react-uuid"
// import { useNavigate } from "react-router-dom"
// import AddCategory from "../components/AddCategory"
// import { ButtonStyles, colors, properties } from "../GlobalStyles"
// import { MdOutlineBookmarkAdd } from "react-icons/md"
// import TopBar from "../components/TopBar"
// import TodoInterface from "../interfaces/TodoInterface"

// interface Props {
//   notes: NoteInterface[]
//   setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
//   categories: string[]
//   setCategories: React.Dispatch<React.SetStateAction<string[]>>
// }

// interface StyledProps {
//   todos: TodoInterface[]
// }

// const getDate = () => {
//   const d = new Date()
//   let date = d.getDate()
//   let month = d.getMonth() + 1
//   let year = d.getFullYear()
//   return `${year}-${month < 10 ? `0${month}` : month}-${
//     date < 10 ? `0${date}` : date
//   }`
// }

// const AddNote = (props: Props) => {
//   const { categories, setCategories, notes, setNotes } = props

//   const [title, setTitle] = useState<string>("")
//   const [noteDetails, setNoteDetails] = useState<string>("")
//   const [date, setDate] = useState<string>(getDate)
//   const [category, setCategory] = useState<string>(
//     categories.length ? categories[0] : ""
//   )
//   const [todos, setTodos] = useState<TodoInterface[]>([
//     // { id: uuid(), done: false, todoText: "" },
//     { id: "1", done: false, todoText: "todo 1" },
//     { id: "2", done: true, todoText: "todo 2" },
//   ])
//   const [addCategoryPopup, setAddCategoryPopup] = useState<boolean>(false)

//   const formRef = useRef<HTMLFormElement>(null)
//   const titleRef = useRef<HTMLTextAreaElement>(null)
//   const dateInputRef = useRef<HTMLInputElement>(null)
//   const addCategoryRef = useRef<HTMLButtonElement>(null)

//   const navigate = useNavigate()

//   const titleHandler = (event: ChangeEvent<HTMLTextAreaElement>): void => {
//     setTitle(event.currentTarget.value)
//     titleRef.current!.style.height = "auto"
//     titleRef.current!.style.height = `${event.target.scrollHeight}px`
//   }

//   const noteDetailsHandler = (
//     event: ChangeEvent<HTMLTextAreaElement>
//   ): void => {
//     setNoteDetails(event.currentTarget.value)
//   }

//   const dateHandler = (event: ChangeEvent<HTMLInputElement>): void => {
//     setDate(event.currentTarget.value)
//   }

//   const categoryHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
//     setCategory(event.currentTarget.value)
//   }

//   const addNoteHandler = (event: SyntheticEvent): void => {
//     formRef.current?.reportValidity()
//     event.preventDefault()
//     if (title && noteDetails && date) {
//       if (!categories.length) {
//         addCategoryRef.current?.click()
//         //! useless
//         setAddCategoryPopup(true)
//       } else if (category) {
//         const newNote: NoteInterface = {
//           id: uuid(),
//           title,
//           noteDetails,
//           date,
//           category,
//           todos,
//         }
//         setNotes([...notes, newNote])
//         navigate("/")
//       }
//     }
//   }

//   const deleteHandler = (): void => {
//     setTodos(todos.filter((todo) => todo.id === "1"))
//   }

//   return (
//     <Container>
//       <FormContainer ref={formRef} onSubmit={addNoteHandler}>
//         <TopBar title="new note" />
//         <DetailsContainer>
//           <InputContainer>
//             <DateInput
//               ref={dateInputRef}
//               required
//               type="date"
//               value={date}
//               onChange={dateHandler}
//             />
//           </InputContainer>
//           <CategoryMainContainer>
//             <InputContainer /* style={{ flex: 0.9 }} */>
//               <Category
//                 required
//                 onChange={categoryHandler}
//                 value={category}
//                 disabled={!categories.length}
//               >
//                 {categories.length ? (
//                   categories.map((category, key) => (
//                     <Option key={key} value={category}>
//                       {category}
//                     </Option>
//                   ))
//                 ) : (
//                   <Option>No category</Option>
//                 )}
//               </Category>
//             </InputContainer>
//             <IconContainer title="Add New Category">
//               <Icon
//                 type="button"
//                 ref={addCategoryRef}
//                 onClick={() => setAddCategoryPopup(!addCategoryPopup)}
//               >
//                 <MdOutlineBookmarkAdd />
//               </Icon>
//               <AddCategory
//                 setParentCategory={setCategory}
//                 categories={categories}
//                 setCategories={setCategories}
//                 setAddCategoryPopup={setAddCategoryPopup}
//                 isActive={addCategoryPopup}
//               />
//             </IconContainer>
//           </CategoryMainContainer>
//         </DetailsContainer>
//         <Title
//           required
//           rows={1}
//           ref={titleRef}
//           placeholder="Title"
//           value={title}
//           onChange={titleHandler}
//         />
//         <NoteDetailsContainer todos={todos}>
//           <NoteDetails
//             required
//             placeholder="Note"
//             value={noteDetails}
//             onChange={noteDetailsHandler}
//           ></NoteDetails>
//         </NoteDetailsContainer>
//       </FormContainer>
//     </Container>
//   )
// }

// const inputStyles = css`
//   border: none;
//   outline: none;
//   color: ${colors.primaryFont};
//   background-color: ${colors.secondaryBg};
// `

// const Container = styled.div`
//   background-color: ${colors.primaryBg};
// `

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   /* height: 100%; */
//   height: 100vh;
//   width: 95%;
//   margin: 0 auto;
// `

// const DetailsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   /* width: 95%;
//   margin: 0 auto; */
// `

// const CategoryMainContainer = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `

// const InputContainer = styled.div`
//   color: ${colors.primaryFont};
//   background-color: ${colors.secondaryBg};
//   border-radius: ${properties.borderRadius};
//   display: flex;
//   padding: 5px;
//   flex: 1;
//   margin: 10px;
//   margin-left: 0;
// `

// const DateInput = styled.input`
//   ${inputStyles}
//   flex: 1;
//   padding: 5px;
// `

// const Category = styled.select`
//   ${inputStyles}
//   flex: 1;
//   padding: 5px;
//   width: 100%;
// `

// const Option = styled.option`
//   color: ${colors.primaryFont};
//   background-color: ${colors.secondaryBg};
// `

// const IconContainer = styled.div`
//   position: relative;
//   /* flex: 0.1; */
// `

// const Icon = styled(ButtonStyles)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   width: 28px;
//   height: 28px;
//   /* margin: 7px; */
//   /* margin-left: 0; */
//   font-size: 18px;
// `

// const Title = styled.textarea`
//   ${inputStyles}
//   resize: none;
//   padding: 10px;
//   border-radius: ${properties.borderRadius};
//   overflow: hidden;
// `

// const NoteDetailsContainer = styled.div<StyledProps>`
//   ${inputStyles}
//   padding: 5px;
//   border-radius: ${properties.borderRadius};
//   flex: 1;
//   margin: 10px 0;
//   ${(props) =>
//     !props.todos.length &&
//     css`
//       display: flex;
//     `};
// `

// const NoteDetails = styled.textarea`
//   ${inputStyles}
//   resize: none;
//   /* padding: 10px; */
//   /* padding-right: 8px; */
//   /* border-radius: ${properties.borderRadius}; */
//   flex: 1;
//   /* margin: 10px 0; */
//   margin: 10px;
//   padding-right: 5px;

//   scrollbar-color: ${colors.buttonBg} ${colors.tertiaryBg};

//   &::-webkit-scrollbar {
//     width: 5px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: ${colors.buttonBg};
//     border-radius: ${properties.borderRadius};
//     cursor: pointer;

//     &:hover {
//       background: hsl(240, 45%, 51%);
//     }
//   }

//   &::-webkit-scrollbar-track {
//     background: ${colors.tertiaryBg};
//     border-radius: ${properties.borderRadius};
//     /* margin: 15px; */
//   }
// `

// export default AddNote
