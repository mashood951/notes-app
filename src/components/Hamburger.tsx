import React, { useState } from "react"
import styled, { css } from "styled-components"
import { ButtonStyles, colors, properties } from "../GlobalStyles"
import DropMenu from "./DropMenu"

interface StyledProps {
  isActive: boolean
}

const Hamburger = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <Container>
      <HamburgerContainer
        onClick={() => setIsActive(!isActive)}
        // onFocus={() => setIsActive(!isActive)}
        isActive={isActive}
      >
        <Dot />
        <Dot />
        <Dot />
        {/* {isActive && <DropMenu isActive={isActive} />} */}
      </HamburgerContainer>
      <DropMenu isActive={isActive} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const HamburgerContainer = styled(ButtonStyles)<StyledProps>`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isActive &&
    css`
      & > *:nth-child(1) {
        width: 15px;
        border-radius: ${properties.borderRadius};
        transform: translateY(6px) rotate(45deg);
      }

      & > *:nth-child(2) {
        opacity: 0;
      }

      & > *:nth-child(3) {
        width: 15px;
        border-radius: ${properties.borderRadius};
        transform: translateY(-6px) rotate(-45deg);
      }
    `}/* &.active > *:first-child {
    width: 15px;
    border-radius: ${properties.borderRadius};
    transform: translateY(6px) rotate(45deg);
  }

  &.active > *:nth-child(2) {
    opacity: 0;
  }

  &.active > *:last-child {
    width: 15px;
    border-radius: ${properties.borderRadius};
    transform: translateY(-6px) rotate(-45deg);
  } */
`

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  margin-bottom: 3px;
  background-color: ${colors.primaryFont};
  transition: all 400ms;

  &:last-child {
    margin-bottom: 0;
  }
`

export default Hamburger
