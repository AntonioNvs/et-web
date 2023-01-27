import styled from 'styled-components'
import { Link } from "react-router-dom";

import { Colors } from '../../styles/colors'

const minWidth = 600;

export const ContentContainer = styled.div`
  margin-left: 32px;
  margin-right: 32px;

  display: flex;
  flex: 1;
  flex-direction: row;
  
  margin-top: 0px;
  padding: 0px;

  @media (max-width: ${minWidth}px) {
    flex-direction: column;
    margin-left: 12px;
    margin-right: 12px;
  }
`

export const LeftContainer = styled.div`
  width: 60%;

  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${minWidth}px) {
    width: 100%;
    margin-top: 12px;
  }
`

export const RightContainer = styled.div`
  width: 40%;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${minWidth}px) {
    width: 100%;
    flex: 1;
    flex-direction: row;
  }
`

export const CitationContainer = styled.div`
  margin-left: 90px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${minWidth}px) {
    width: 100%;
    margin-left: 12px;
    flex-direction: row;
    align-items: center;
  }
`

export const CitationAuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleCitation = styled.h1`
  margin: 0px;
  font-size: 3rem;
  color: ${Colors.white};
  max-width: 500px;

  @media (max-width: ${minWidth}px) {
    font-size: 1.5rem;
  }
`

export const SentenceCitation = styled.p`
  font-size: 1.2rem;
  color: ${Colors.gray};
  margin-top: 0px;
  margin-bottom: 2px;

  @media (max-width: ${minWidth}px) {
    font-size: 0.9rem;
  }
`

export const AuthorCitation = styled.i`
  font-size: 1rem;
  color: ${Colors.gray};

  @media (max-width: ${minWidth}px) {
    font-size: 0.8rem;
  }
`

export const LeftCardContainer = styled.div`
  margin-left: 90px;
  margin-top: 16px;
  margin-bottom: 16px;

  width: 100%;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${minWidth}px) {
    margin-left: 12px;
    margin-top: 6px;
    margin-bottom: 6px;
    flex-direction: row;
  }
`

interface CardContainerProps {
  width: number;
  height: number;
}

export const CardContainer = styled(Link)<CardContainerProps>`
  position: relative;
  overflow: hidden;

  width: ${props => props.width}%;
  height: ${props => props.height}%;
  background: rgba(0, 0, 0);
  border-radius: 12px;

  display: flex;
  align-items: center;

  &:hover {
    width: ${props => props.width*1.1}%;
    height: ${props => props.height*1.1}%;
  }
  
  transition: width 0.2s, height 0.2s;

  @media (max-width: ${minWidth}px) {
    width: ${props => props.width >= 50 ? 46 : props.width}%;
    height: ${props => props.height}%;

    &:hover {
      width: ${props => props => props.width >= 50 ? 50 : props.width*1.1}%;
      height: ${props => props.height*1.1}%;
    }
  }
`

interface CardImageBackgroundProps {
  pathImage: string;
}

export const CardImageBackground = styled.div<CardImageBackgroundProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-image: url(${props => props.pathImage});
  background-size: cover;

  opacity: 0.3;

  &:hover {
    opacity: 0.15;
  }

  transition: opacity 0.2s;
`

export const CardTitle = styled.h3`
  position: relative;
  z-index: 2;
  width: 100%;

  font-size: 1.6rem;
  font-weight: bold;
  color: ${Colors.white};
  text-shadow: 1px 1px #000;

  text-align: center;

  @media (max-width: ${minWidth}px) {
    font-size: 1rem;
  }
`