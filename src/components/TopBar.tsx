import React from "react"
import { MdArrowBackIosNew, MdOutlineDone } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import BackButton from "./BackButton"
import Button from "./Button"

interface Props {
  title: string
}

const TopBar = (props: Props) => {
  const { title } = props

  const navigate = useNavigate()

  return (
    <Container>
      <SubContainer>
        <Button
          title="Back"
          onClick={() => navigate("/")}
          Icon={MdArrowBackIosNew}
        />
        {/* <BackButton navigateTo="/" /> */}
        <Title>{title}</Title>
      </SubContainer>
      <SubContainer>
        <Button title="Add Note" type="submit" Icon={MdOutlineDone} />
        {/* <button type="submit">Add</button> */}
      </SubContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`

const SubContainer = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.div`
  margin-left: 10px;
  font-size: 20px;
  text-transform: capitalize;
`

export default TopBar
