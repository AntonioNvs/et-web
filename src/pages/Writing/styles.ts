import styled from "styled-components"
import { Colors } from "../../styles/colors";

const minWidth = 800

export const TerminalContainer = styled.div`
  margin: 24px;
  margin-bottom: 48px;
  padding: 24px;

  align-self: center;
  width: 100vw;
  max-width: 720px;
  height: 80%;

  background-color: #000;
  border-radius: 12px;

  @media (max-width: ${minWidth}px) {
    max-width: 80%;
  }
`

export const InformationContainer = styled.div``

interface TextInformationProps {
  size: number;
  weight: number;
}

export const TextInformation = styled.p<TextInformationProps>`
  font-family: 'Cascadia Code';
  font-weight: ${(props: TextInformationProps) => props.weight};
  font-size: ${(props: TextInformationProps) => props.size}rem;
  color: ${Colors.white};
`

export const TextWarning = styled.p`
  margin: 0;
  color: ${Colors.red};
  font-size: 0.7rem;
  font-weight: 500;
`;

export const TerminalInput = styled.textarea`
  width: 100%;
  background-color: #000;

  color: ${Colors.lightGreen};
  font-size: 1rem;
  font-family: 'Cascadia Code';
  font-weight: 500;

  resize: none;
` 

export const TextCorrectResult = styled.p`
  margin: 0;
  color: ${Colors.green};
  font-size: 0.9rem;
  font-family: 'Cascadia Code';
  font-weight: 500;
`;

export const NextInput = styled.input`
  padding: 0;
  margin-top: 8px;

  width: 100%;
  background-color: #000;

  color: ${Colors.green};
  font-size: 0.8rem;
  font-family: 'Cascadia Code';
  font-weight: 500;
`;