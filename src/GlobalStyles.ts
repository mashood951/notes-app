import styled, { css } from "styled-components"

export const colors = {
  primaryBg: "hsl(249, 19%, 14%)",
  // secondaryBg: "hsl(244, 17%, 18%)",
  secondaryBg: "hsl(244, 17%, 20%)",
  tertiaryBg: "hsl(244, 17%, 28%)",
  buttonBg: "hsl(240, 45%, 61%)",
  primaryFont: "hsl(0, 0%, 100%)",
  hoverBtnBg: "",
  activeBtnBg: "",
}

export const properties = {
  stickyButtonPos: "50px",
  transitionTime: "400ms",
  secondaryTransitionTime: "200ms",
  borderRadius: "15px",
  highlightSize: "5px",
}

export const InputStyles = styled.input`
  border: none;
  outline: none;
  color: ${colors.primaryFont};
  background-color: ${colors.secondaryBg};
`

export const ButtonStyles = styled.button`
  border: none;
  outline: none;
  color: ${colors.primaryFont};
  background-color: ${colors.buttonBg};
  /* background-color: ${colors.secondaryBg}; */

  &:hover {
    cursor: pointer;
  }
`

interface StyledProps {
  isActive?: boolean
}

export const StickyButton = styled(ButtonStyles)<StyledProps>`
  position: fixed;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: ${colors.primaryFont};
  background-color: ${colors.buttonBg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  box-shadow: 3px 5px 7px ${colors.primaryBg};
  transition: all ${properties.transitionTime};

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.isActive &&
    css`
      width: 100vw;
      height: 100vh;
      border-radius: 0;
    `}
`
