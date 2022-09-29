import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors, properties } from "../GlobalStyles";
import NoteInterface from "../interfaces/NoteInterface";

interface Props extends NoteInterface {
  activeNotes: string[];
  setActiveNotes: React.Dispatch<React.SetStateAction<string[]>>;
  deletedNotes: string[];
  setDeletedNotes: React.Dispatch<React.SetStateAction<string[]>>;
}

const NoteTile = (props: Props) => {
  const {
    id,
    title,
    noteDetails,
    date,
    category,
    activeNotes,
    setActiveNotes,
    deletedNotes,
    setDeletedNotes,
  } = props;

  const [isActiveNote, setIsActiveNote] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    !activeNotes.length && containerRef.current?.classList.remove("active");
    setDeletedNotes([]);
  }, [activeNotes]);

  useLayoutEffect(() => {
    deletedNotes.includes(id)
      ? containerRef.current?.classList.add("deleted")
      : containerRef.current?.classList.remove("deleted");
  }, [deletedNotes]);

  let timer: number;

  const clickHandler = () => {
    if (!activeNotes.length) {
      isActiveNote ? setIsActiveNote(false) : navigate(`/edit-note/${id}`);
    }
  };

  const touchStartHandler = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const elem = event.currentTarget;

    if (activeNotes.length) {
      if (elem.classList.toggle("active")) {
        setIsActiveNote(true);
        setActiveNotes([...activeNotes, id]);
      } else {
        setActiveNotes(activeNotes.filter((activeNote) => activeNote !== id));
      }
    } else {
      timer = window.setTimeout(() => {
        elem.classList.toggle("active");
        setActiveNotes([...activeNotes, id]);
        setIsActiveNote(true);
      }, 500);
    }
  };

  const touchEndHandler = () => {
    timer && clearTimeout(timer);
  };

  return (
    <Container
      // draggable={true}
      {...props}
      ref={containerRef}
      onClick={clickHandler}
      onMouseDown={touchStartHandler}
      onMouseUp={touchEndHandler}
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
    >
      <div>{category}</div>
      <div>{title}</div>
      <div>
        {noteDetails.length > 80
          ? noteDetails.substring(0, 80) + "..."
          : noteDetails}
      </div>
      <div>{date}</div>
    </Container>
  );
};

const Container = styled.div<Props>`
  /* for draggable that respect borders */
  /* transform: translate(0, 0); */

  /* display: flex;
  flex-direction: column; */
  background-color: ${colors.secondaryBg};
  /* width: 200px; */
  width: 24%;
  border-radius: ${properties.borderRadius};
  margin: 0.5%;
  padding: 15px;
  user-select: none;

  cursor: pointer;

  opacity: 1;

  max-height: 100px;
  overflow: hidden;

  /* outline: 0px solid ${colors.buttonBg}; */

  transition: box-shadow
    ${(props) => !props.deletedNotes.length && properties.transitionTime};

  box-shadow: none;

  &.active {
    /* outline: 5px solid ${colors.buttonBg}; */
    box-shadow: 0 0 0 ${properties.highlightSize} ${colors.buttonBg} inset;

    /* background-color: hsl(244, 17%, 28%);
    transition: background-color ${properties.transitionTime}; */
  }

  &.deleted {
    width: 0;
    /* height: 0; */
    padding: 0;
    margin: 0;
    opacity: 0;
    transition: all ${properties.transitionTime};
  }

  @media (max-width: 768px) {
    width: 32%;
  }

  @media (max-width: 480px) {
    width: 48%;
  }
`;

export default NoteTile;
