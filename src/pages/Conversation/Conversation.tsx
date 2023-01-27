import React, { useState, useEffect, useRef, useContext } from "react"
import 'regenerator-runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { ResponseDTO } from "../../server/responseDTO";
// import { SocketContext } from '../../context/socket';

import {
  ChatContainer,
  ChatMessageContainer,
  InputContainer,
  InputMessage,
  MessageContainer,
  MessageText,
  MicrophoneButton,
  MicrophoneStopImage,
  MicrophoneStartImage,
  TimeMessageText,
  SendButton,
  ChatSubmitContainer,
  SendImage
} from "./styles"

import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import MicrophoneSVG from "../../../images/microphone.svg"
import SendSVG from "../../../images/send.svg"

interface MessageDTO {
  text: string;
  time: Date;
  who: "robot" | "me";
}

export default function Conversation() {
  const [textWritten, setTextWritten] = useState("")
  const [messages, setMessages] = useState<MessageDTO[]>([])
  const [microphoneState, setMicrophoneState] = useState(false)

  const chatInputRef = useRef<HTMLInputElement>(null)

  const socket = useContext(SocketContext);

  const {
    transcript,
    resetTranscript
  } = useSpeechRecognition()

  useEffect(() => {
    // Setting the array of messages
    socket.on("conversation/received_data", (data) => {
      const messagesRow: MessageDTO[] = []
      data.data.messages.map((mess: MessageDTO) => {
        messagesRow.push({
          text: mess.text,
          who: mess.who,
          time: new Date(mess.time)
        })
      })
      setMessages(messagesRow.reverse())
    })

    socket.emit("conversation/get_data")
  }, [])

  useEffect(() => {
    if(transcript != "")
      setTextWritten(transcript)
  }, [transcript])

  function handleMicrophone() {
    if(!microphoneState)
      SpeechRecognition.startListening({ 
        continuous: true,
        language: 'en'
      })
    else 
      SpeechRecognition.stopListening()
    
    setMicrophoneState(!microphoneState)
  }

  function handleSubmitChat(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if(textWritten != "") {
      const currentDate = new Date();
      
      socket.emit("conversation/send_message", {
        text: textWritten,
        time: currentDate
      })

      setMessages([{
        text: textWritten,
        time: currentDate,
        who: "me"
      },
      ...messages])

      setTextWritten("")
      resetTranscript()
      chatInputRef.current?.focus()
    }
  }

  return (
    <MainContainer>
      <Header />
      <ChatContainer>
        <ChatMessageContainer>
          {
            messages && messages.map((message, index) => (
              <MessageContainer who={message.who} key={index}>
                <MessageText>{message.text}</MessageText>
                <TimeMessageText>{`${message.time.getHours()}:${message.time.getMinutes()}`}</TimeMessageText>
              </MessageContainer>
            ))
          }
        </ChatMessageContainer>
        <ChatSubmitContainer>
          <InputContainer>
            <InputMessage
              ref={chatInputRef}
              placeholder="Digite a mensagem aqui ou grave por aúdio."
              value={textWritten}
              onChange={e => setTextWritten(e.target.value)}
            />
            <MicrophoneButton
              onClick={() => handleMicrophone()}
            >
              {
                microphoneState && microphoneState ?
                <MicrophoneStopImage /> :
                <MicrophoneStartImage src={MicrophoneSVG} />
              }
            </MicrophoneButton>
          </InputContainer>
          <SendButton 
            onClick={e => handleSubmitChat(e)}
          >
            <SendImage src={SendSVG}/>
          </SendButton>
        </ChatSubmitContainer>
      </ChatContainer>
    </MainContainer>
  )
}