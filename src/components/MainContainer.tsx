import React from "react"
import styled from "styled-components"

const MainContainerStyler = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`

interface ReactComponent {
  children: React.ReactNode
}

const MainContainer: React.FC<ReactComponent> = ({ children }) => {
  return <MainContainerStyler>{children}</MainContainerStyler>
}

export default MainContainer