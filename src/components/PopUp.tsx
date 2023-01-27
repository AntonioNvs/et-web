import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { Colors } from "../styles/colors";

interface ContainerProps {
  code: "error" | "success";
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 12px;

  width: 160px;
  height: 72px;
  border-radius: 16px;

  background-color: ${props => props.code == "error" ? Colors.red : Colors.lightGreen};

  display: flex;
  align-items: center;

  opacity: 0;
  transition: opacity 500ms;
`;

const TextMessage = styled.p`
  font-size: 0.8rem;
  color: ${Colors.white};
  font-weight: 500;
  text-align: center;
`;

interface PopupProps {
  code: "error" | "success";
  message: string;
}

export interface ShowPopuProps extends PopupProps{
  activate: boolean;
}

const Popup: React.FC<PopupProps> = ({ code, message }) => {
  const [opacity, setOpacity] = useState(0)

  const timeOut = useRef(0)

  useEffect(() => {
    setOpacity(1)

    clearTimeout(timeOut.current)
    timeOut.current = setTimeout(() => {
      setOpacity(0)
    }, 5000)
  }, [])
  return(
    <Container style={{opacity}} code={code}>
      <TextMessage>{message}</TextMessage>
    </Container>
  )
}

export default Popup