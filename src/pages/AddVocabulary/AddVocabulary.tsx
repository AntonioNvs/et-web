import React, { useState, useEffect } from "react"
import api from "../../server/axios"

import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import {ResponseDTO} from "../../server/responseDTO"
import { AddVocabularyContainer, BackgroundContainer, ImageContainer, ImagesContainer, ImportImageContainer, ImportImageInput, ImportImageLabel, Input, InputContext, LeftInputContext, ReviewPageText, RightInputContext, SaveButton, TextButton, TitleInput } from "./styles";

export default function AddVocabulary() {
  const [word, setWord] = useState('')
  const [images, setImages] = useState([])
  const [imagesURLs, setImagesURLs] = useState<string[]>()

  const [firstSentence, setFirstSentence] = useState('')
  const [thirdSentence, setThirdSentence] = useState('')
  const [secondSentence, setSecondSentence] = useState('')

  useEffect(() => {
    if(images.length < 1 && images.length > 3) return;

    const newImagesURLs: string[] = []
    images.forEach(image => newImagesURLs.push(URL.createObjectURL(image)))
    setImagesURLs(newImagesURLs)
  }, [images])

  function handleFileSelecteds(e: React.ChangeEvent<HTMLInputElement>) {
    setImages([...e.target.files])
  }

  function handleSend(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    api.post('vocabulary/add_word', {
      word,
      sentences: [firstSentence, secondSentence, thirdSentence], 
      images: images
    }).then((response) => {
      const data: ResponseDTO = response
      alert(`${data.code}: ${data.message}`)

    })
  }

  return (
    <MainContainer>
      <Header />
      <AddVocabularyContainer>
        <BackgroundContainer>
          <InputContext>
            <LeftInputContext>
              <TitleInput>Type the word</TitleInput>
              <Input 
                width={60} 
                value={word} 
                onChange={(e) => setWord(e.target.value)}
                placeholder="Word.."
              />
              <></>
              <TitleInput>Write three sentences with the word</TitleInput>
              <Input 
                placeholder="First sentence" 
                width={80} 
                value={firstSentence} 
                onChange={(e) => setFirstSentence(e.target.value)}
              />
              <Input 
                placeholder="Second sentence" 
                width={80} 
                value={secondSentence} 
                onChange={(e) => setSecondSentence(e.target.value)}
              />
              <Input 
                placeholder="Third sentence"
                width={80} 
                value={thirdSentence} 
                onChange={(e) => setThirdSentence(e.target.value)}
              />
            </LeftInputContext>

            <RightInputContext>
              <ImportImageContainer>
                <ImportImageLabel>
                  Drop or get images that the word reference
                  <ImportImageInput multiple accept="image/*" type="file" onChange={handleFileSelecteds}/>
                </ImportImageLabel>
              </ImportImageContainer>
              <ImagesContainer>
                {imagesURLs && 
                  imagesURLs.map((path, index) => {
                    return <ImageContainer key={index} src={path}/>
                  })
                }
              </ImagesContainer>
            </RightInputContext>

          </InputContext>
          <SaveButton onClick={handleSend}>
            <TextButton>Save!</TextButton>
          </SaveButton>
        </BackgroundContainer>
        <ReviewPageText>I want to review my words!</ReviewPageText>
      </AddVocabularyContainer>
    </MainContainer>
  )
}