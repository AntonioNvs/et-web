import styled from "styled-components"
import { Colors } from "../../styles/colors";

const minWidth = 780

export const AddVocabularyContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;

  padding: 40px;
  margin-bottom: 64px;
  background: linear-gradient(140.62deg, #03040F 0%, rgba(39, 8, 38, 0.582187) 106.65%, rgba(49, 10, 31, 0.58) 106.67%);
  border-radius: 16px;

  display: flex;
  align-self: center;
  flex-direction: column;

  @media (max-width: ${minWidth}px) {
    margin-top: 12px;
    padding: 24px;
    max-width: 60%;
  }
`;

export const ReviewPageText = styled.div`
  position: absolute;
  bottom: 20px;
  color: ${Colors.gray};
  font-size: 20px;
  font-weight: bold;

  @media (max-width: ${minWidth}px) {
    font-size: 16px;
  }
`;

export const InputContext = styled.div`
  width: 100%;
  height: 100%;

  display:flex;

  @media (max-width: ${minWidth}px) {
    flex-direction: column;
  }
`;

interface InputProps {
  width: number;
}

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width}%;
  height: 32px;

  padding: 8px;
  border-radius: 12px;
  background-color: ${Colors.black};
  margin-bottom: 8px;

  font-size: 12px;
  color: ${Colors.white};

  @media (max-width: ${minWidth}px) {
    width: 90%;
    height: 24px;
    font-size: 10px;
  }
`;

export const TitleInput = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.white};

  margin-bottom: 12px;

  @media (max-width: ${minWidth}px) {
    margin-bottom: 4px;
    font-size: 12px;
  }
`;

export const ImportImageContainer = styled.div`
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0);
  border: 2px dashed #1C1C1C;
  border-radius: 12px;

  width: 100%;
  height: 144px;

  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${minWidth}px) {
    width: 60%;
    flex: 1;
  }
`;

export const ImportImageInput = styled.input`
  display: none;
`

export const ImportImageLabel = styled.label`
  color: ${Colors.gray};
  font-size: 14px;
  text-align: center;

  cursor: pointer;
`;

export const ImagesContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${minWidth}px) {
    margin-top: 12px;
  }
`;

export const ImageContainer = styled.img`
  max-width: 80px;
  max-height: 80px;

  @media (max-width: ${minWidth}px) {
    max-width: 56px;
    max-height: 56px;
  }
`;

export const LeftInputContext = styled.div`
  width: 60%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${minWidth}px) {
    width: 100%;
    max-height: 80%;
  }
`;

export const RightInputContext = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${minWidth}px) {
    width: 100%;
  }
`;

export const SaveButton = styled.button`
  width: 120px;
  height: 48px;

  border: 0;
  border-radius: 12px;
  background-color: ${Colors.green};

  margin-top: 32px;

  align-self: center;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${minWidth}px) {
    margin-top: 16px;
  }
`;

export const TextButton = styled.h4`
  font-size: 12px;
  font-weight: 700;
  color: ${Colors.white};
`;

