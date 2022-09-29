import React from "react"
import { IconType } from "react-icons/lib"
import styled from "styled-components"
import { colors } from "../GlobalStyles"

interface Props {
  type?: "button" | "submit" | "reset"
  ref?: React.RefObject<HTMLButtonElement>
  title: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  Icon: IconType
}

const Button = (props: Props) => {
  const { type, ref, title, onClick, Icon } = props

  return (
    <StyledButton
      type={type ? type : "button"}
      ref={ref}
      title={title}
      onClick={onClick}
    >
      <Icon />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 18px;
  border: none;
  outline: none;
  color: ${colors.primaryFont};
  background-color: ${colors.buttonBg};

  &:hover {
    cursor: pointer;
  }
`

export default Button
