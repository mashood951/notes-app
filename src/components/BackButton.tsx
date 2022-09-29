import React from "react"
import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ButtonStyles, properties, StickyButton } from "../GlobalStyles"

interface Props {
  navigateTo: string
}

const BackButton = (props: Props) => {
  const { navigateTo } = props

  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate(navigateTo)}>
      <MdArrowBackIosNew />
    </Button>
  )
}

const Button = styled(ButtonStyles)`
  /* top: calc(${properties.stickyButtonPos} / 2);
  left: calc(${properties.stickyButtonPos} / 2); */

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 18px;
`

export default BackButton
