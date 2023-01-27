import styled from "styled-components"
import { Colors } from "../../styles/colors";


export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 720px;

  padding: 24px;

  display: flex;
  align-self: center;
  flex-direction: column;
`;

export const ChatMessageContainer = styled.div`
  display: flex;
  
  width: 100%;
  height: 480px;

  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    width: 1px;
  }

  flex-direction: column-reverse; 
  margin-bottom: 12px;
`;

interface MessageContainerProps {
  who: "me" | "robot";
}

export const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  flex-direction: column;
  align-self: ${props => props.who == "me" ? "flex-end" : "flex-start"};
  align-items: ${props => props.who == "me" ? "flex-end" : "flex-start"};
  
  max-width: 600px;
  padding: 12px;
  border-radius: 12px;
  margin: 8px;
  background: ${props => props.who == "me" ? Colors.meMessage : Colors.robotMessage};
`;

export const MessageText = styled.p`
  max-width: 600px;
  margin: 0;

  word-wrap: break-word;
  font-size: 0.9rem;
  color: ${Colors.white};
`;

export const TimeMessageText = styled.p`
  margin: 0;
  margin-top: 2px;
  font-size: 0.7rem;
  color: ${Colors.gray};
`;

export const ChatSubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const InputContainer = styled.div`
  width: 90%;
  height: 64px;

  background-color: ${Colors.black};
  border-radius: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const InputMessage = styled.input`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${Colors.white};

  background: none;
  text-align: left;
  width: 80%;
  margin: 12px;
  padding: 12px;
`

export const MicrophoneButton = styled.button`
  padding: 0;
  width: 64px !important;
  height: 64px;
  background-color: ${Colors.blackButton};
  border: 0;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`

export const MicrophoneStartImage = styled.img`
  width: 32px;
  height: 32px;
`

export const MicrophoneStopImage = styled.div`
  width: 24px;
  height: 24px;

  align-self: center;
  background-color: ${Colors.white};
`

export const SendButton = styled.button`
  padding: 0;
  width: 64px !important;
  height: 64px;
  background-color: ${Colors.blackButton};
  border: 0;
  border-radius: 50%;

  margin-left: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const SendImage = styled.img`
  width: 28px;
  height: 28px;
`