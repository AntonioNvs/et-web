import styled from "styled-components"
import { Colors } from "../styles/colors"
import { Link } from "react-router-dom"

const Container = styled.div`
  margin-left: 48px;
  margin-right: 48px;
  margin-top: 48px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LogoTitle = styled(Link)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Colors.white};

  &:hover {
    color: ${Colors.white};
    opacity: 0.7;
  }

  transition: opacity 0.2s;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const OptionsText = styled.a`
  margin-left: 12px;
  margin-right: 12px;

  color: ${Colors.gray};
  font-size: 1rem;

  &:hover {
    color: ${Colors.gray};
    opacity: 0.7;
  }

  transition: opacity 0.2s;
`


export default function Header() {
  return (
    <Container>
      <LogoTitle to="/dashboard">E.T.</LogoTitle>
      <OptionsContainer>
        <OptionsText>History</OptionsText>
      </OptionsContainer>
    </Container>
  )
}