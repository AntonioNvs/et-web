import React, { useEffect } from "react";

import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";

import api from "../../server/axios"

import { 
  ContentContainer,
  LeftContainer,
  LeftCardContainer,
  CitationContainer,
  TitleCitation,
  AuthorCitation,
  SentenceCitation,
  CardContainer,
  CardTitle,
  CardImageBackground,
  RightContainer,
  CitationAuthorContainer
} from './styles'

export default function Dashboard() {
  useEffect(() => {
    api.get("/dashboard").then()
  }, [])
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <LeftContainer>
          <CitationContainer>
            <TitleCitation>Ready to one more day?</TitleCitation>
            <CitationAuthorContainer>
              <SentenceCitation>“The history is made by all of you, include me!”</SentenceCitation>
              <AuthorCitation>Antônio Neves</AuthorCitation>
            </CitationAuthorContainer>
          </CitationContainer>

          <LeftCardContainer>
            <CardContainer 
              to="/writing"
              height={90} 
              width={35}
              >
                <CardImageBackground 
                  pathImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                />
              
              <CardTitle>Writing</CardTitle>
              
            </CardContainer>      

            <CardContainer 
              to="/conversation"
              height={75} 
              width={48}
            >
              <CardImageBackground
                pathImage="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BlYWtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              
              <CardTitle>Conversation</CardTitle>

            </CardContainer>
          </LeftCardContainer>
        </LeftContainer>

        <RightContainer>
          <CardContainer
            to="/dashboard"
            width={70}
            height={46}
          >
            <CardImageBackground
                pathImage="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              
            <CardTitle>Listening</CardTitle>
          </CardContainer>

          <CardContainer
            to="/add-vocabulary"
            width={60}
            height={40}
          >
            <CardImageBackground
                pathImage="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              />
              
            <CardTitle>Vocabulary</CardTitle>
          </CardContainer>
        </RightContainer>
      </ContentContainer>
    </MainContainer>
  )
}