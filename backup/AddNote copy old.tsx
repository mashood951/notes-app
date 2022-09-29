// import React, { useState, ChangeEvent, useRef, FunctionComponent } from "react"
// import styled, { css } from "styled-components"
// import NoteInterface from "../interfaces/NoteInterface"
// import uuid from "react-uuid"
// import { useNavigate } from "react-router-dom"
// import BackButton from "../components/BackButton"
// import AddCategory from "../components/AddCategory"
// import { colors, properties } from "../GlobalStyles"

// interface Props {
//   notes: NoteInterface[]
//   setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>
//   categories: string[]
//   setCategories: React.Dispatch<React.SetStateAction<string[]>>
// }

// const getDate = () => {
//   const d = new Date()
//   let date = d.getDate()
//   let month = d.getMonth() + 1
//   let year = d.getFullYear()
//   return (
//     year +
//     "-" +
//     (month < 10 ? `0${month}` : month) +
//     "-" +
//     (date < 10 ? `0${date}` : date)
//   )
// }

// const AddNote = (props: Props) => {
//   const { categories, setCategories, notes, setNotes } = props

//   const [title, setTitle] = useState<string>("")
//   const [noteDetails, setNoteDetails] = useState<string>("")
//   const [date, setDate] = useState<string>(getDate)
//   const [category, setCategory] = useState<string>(
//     categories.length ? categories[0] : ""
//   )
//   const [addCategoryPopup, setAddCategoryPopup] = useState<boolean>(false)

//   const titleRef = useRef<HTMLTextAreaElement>(null)

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

//   const addNoteHandler = (event: React.SyntheticEvent): void => {
//     if (title && noteDetails && date && category) {
//       event.preventDefault()
//       const newNote: NoteInterface = {
//         id: uuid(),
//         title,
//         noteDetails,
//         date,
//         category,
//       }
//       setNotes([...notes, newNote])
//       navigate("/")
//     }
//   }

//   return (
//     <Container>
//       <FormContainer onSubmit={addNoteHandler}>
//         {/* <BackButton navigateTo="/" /> */}
//         <DetailsContainer>
//           <DatePicker
//             required
//             type="date"
//             value={date}
//             onChange={dateHandler}
//           />
//           <CategoryContainer>
//             <Category required onChange={categoryHandler} value={category}>
//               {categories.map((category, key) => (
//                 <Option key={key} value={category}>
//                   {category}
//                 </Option>
//               ))}
//             </Category>
//           </CategoryContainer>
//         </DetailsContainer>
//         <Title
//           required
//           rows={1}
//           ref={titleRef}
//           placeholder="Title"
//           value={title}
//           onChange={titleHandler}
//         />
//         <NoteDetails
//           required
//           placeholder="Note"
//           value={noteDetails}
//           onChange={noteDetailsHandler}
//         ></NoteDetails>

//         <button onClick={() => setAddCategoryPopup(!addCategoryPopup)}>
//           Add category
//         </button>

//         <button type="submit" onClick={addNoteHandler}>
//           Add
//         </button>
//         {addCategoryPopup && (
//           <AddCategory
//             setParentCategory={setCategory}
//             categories={categories}
//             setCategories={setCategories}
//             setAddCategoryPopup={setAddCategoryPopup}
//           />
//         )}
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
//   min-height: 100vh;
//   /* height: 100vh; */
//   background-color: ${colors.primaryBg};
// `

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `

// const DetailsContainer = styled.div`
//   display: flex;
// `

// const DatePicker = styled.input`
//   ${inputStyles}
//   position: relative;
//   flex: 1;
//   border-radius: ${properties.borderRadius};
//   padding: 10px;
//   margin: 10px;

//   &::-webkit-calendar-picker-indicator {
//     appearance: none;
//     position: absolute;
//     content: "▼";
//     right: 10px;
//     top: 50%;
//     transform: translateY(-50%);
//   }
// `

// const CategoryContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex: 1;
//   margin: 10px;
//   background-color: ${colors.secondaryBg};
//   border-radius: ${properties.borderRadius};

//   &::after {
//     position: absolute;
//     content: "▼";
//     font-size: 10px;
//     right: 10px;
//     top: 50%;
//     transform: translateY(-50%);
//     z-index: 0;
//   }
// `

// const Category = styled.select`
//   ${inputStyles}
//   flex: 1;
//   border-radius: ${properties.borderRadius};
//   background-color: transparent;
//   padding: 10px;
//   cursor: pointer;
//   appearance: none;
//   z-index: 1;
// `

// const Option = styled.option`
//   color: ${colors.primaryFont};
//   background-color: ${colors.secondaryBg};
// `

// const Title = styled.textarea`
//   ${inputStyles}
//   resize: none;
// `

// const NoteDetails = styled.textarea`
//   ${inputStyles}
// `

// export default AddNote
