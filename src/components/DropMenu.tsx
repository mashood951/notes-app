import React from "react"
import styled from "styled-components"
import { ButtonStyles, colors, properties } from "../GlobalStyles"

interface Props {
  isActive: boolean
}

const DropMenu = (props: Props) => {
  const { isActive } = props

  return (
    <Container isActive={isActive}>
      <Button>Starred Items</Button>
      <Button>Add Category</Button>
      <Button>Delete Category</Button>
    </Container>
  )
}

// TODO add dropshadow
const Container = styled.div<Props>`
  position: absolute;
  top: 100%;
  right: 100%;
  box-shadow: 0 0 0 ${properties.highlightSize} ${colors.buttonBg};
  border-radius: ${properties.borderRadius};
  background-color: ${colors.secondaryBg};
  overflow: hidden;
  z-index: 2;
  transition: all ${properties.secondaryTransitionTime};
  transform: ${(props) => (props.isActive ? "scale(1)" : "scale(0)")};
  transform-origin: top right;
`

const Button = styled(ButtonStyles)`
  width: max-content;
  padding: 10px;
  background-color: ${colors.secondaryBg};
`

export default DropMenu
