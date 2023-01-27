import React, { useState, useEffect, useContext, useRef } from "react"

import { ResponseDTO } from "../../server/responseDTO";
import api from "../../server/axios"
import Header from "../../components/Header";

import Popup, { ShowPopuProps } from "../../components/PopUp";
import MainContainer from "../../components/MainContainer";

import {
  InformationContainer,
  NextInput,
  TerminalContainer,
  TerminalInput,
  TextCorrectResult,
  TextInformation,
  TextWarning
} from './styles'



interface WrittenInformationsProps extends ResponseDTO{
  data: {
    quantity: number;
    characters: number;
    word_variability: number;
    words_for_revision: string[]
    theme_name: string;
    theme_id: number;
  }
}

interface ResultDataProps extends ResponseDTO {
  data: {
    accuracy: number;
    analysis: {
      text: string;
      result: string;
      corrections: any[];
    }
  }
}

export default function Writing() {
  const [textWarn, setTextWarn] = useState("")
  const [textWritten, setTextWritten] = useState("")
  const [isForShowResults, setIsForShowResults] = useState(false)
  const [popupProps, setPopupProps] = useState<ShowPopuProps>({
    activate: false,
    code: "error",
    message: ""
  })
  const [resultData, setResultData] = useState<ResultDataProps>({} as ResultDataProps)
  const [information, setInformation] = useState<WrittenInformationsProps["data"]>({} as WrittenInformationsProps["data"])

  const terminalInputRef = useRef<HTMLTextAreaElement>(null)
  const nextInputRef = useRef<HTMLInputElement>(null)

  const limitCharacter = 480

  useEffect(() => {   
    getDatabaseInformation().then()
  }, [])

  async function getDatabaseInformation() {
    const response = await api.get("writing/get-info")
    const data: WrittenInformationsProps = response.data
    setInformation(data.data)
    terminalInputRef.current!.focus()
  }

  function handleWriting(event: React.ChangeEvent<HTMLTextAreaElement>) {
    let text = event.target.value
    
    if(text.length >= limitCharacter) {
      setTextWarn(`The limit of characters is ${limitCharacter}`)
      return 
    }

    if(text[text.length-1] == "\n") {
      text = text.substring(0, text.length-1)
      setTextWritten(text)
      
      api.post("/writing/post-info", {
        sentence: text, 
        language_id: 1,
        theme_id: information.theme_id
      }).then(response => {
        const data: ResultDataProps = response.data
        if(data.message.includes("theme")) {
          setPopupProps({
            activate: true,
            code: data.code,
            message: data.message
          })
          getDatabaseInformation()
          setTextWritten("")
        } else {
          if(data.code == "success") {
            setResultData(data)
          } else {
            setPopupProps({
              activate: true,
              code: data.code,
              message: data.message
            })
          }
          setIsForShowResults(true)
        }
      })

      return
    }

    setTextWritten(text)
    setTextWarn("")
  }

  async function handleNext(event: React.ChangeEvent<HTMLInputElement>) {
    setIsForShowResults(false)
    setTextWritten("")
    setResultData({} as ResultDataProps)

    setPopupProps({
      activate: false,
      code: "error",
      message: ""
    })
    await getDatabaseInformation()
  }

  return (
    <MainContainer>
      { popupProps.activate && <Popup code={popupProps.code} message={popupProps.message}/> }

      <Header />
      <TerminalContainer >
        <InformationContainer>
          <TextInformation size={1} weight={400}>Phrases/texts already done: {information.quantity}</TextInformation>
          <TextInformation size={1} weight={400}>Characters made today: {information.characters}</TextInformation>
          <TextInformation size={1} weight={400}>Word variability index: {information.word_variability}%</TextInformation>
          <TextInformation size={1} weight={400}>Words for revision: {information.words_for_revision ? information.words_for_revision.join(" - ") : ""}</TextInformation>
          <TextInformation size={1.2} weight={400}>
            Theme of the time: <b>{information.theme_name}</b>
          </TextInformation>
          <TerminalInput
          
            autoFocus={true}
            ref={terminalInputRef}
            onChange={(event) => handleWriting(event)} 
            value={textWritten} 
            placeholder="Write here."
            rows={6}
            disabled={isForShowResults}
          />
          <TextWarning>{textWarn}</TextWarning>
          {
            isForShowResults && (
              <>
                <TextInformation size={0.9} weight={400}>Result:</TextInformation>
                {resultData.data && <TextCorrectResult>{resultData.data.analysis.result}</TextCorrectResult>}
                <NextInput
                  ref={nextInputRef}
                  placeholder="Type anything to pass.."
                  onChange={(e) => handleNext(e).then()}
                />
              </>
            )
          }
        </InformationContainer>
      </TerminalContainer>
    </MainContainer>
  )
}