// src/components/GameView/styledComponents.js
import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`

export const ChoiceButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 20px;
`

export const ChoiceImage = styled.img`
  width: 120px;
  height: 120px;
  @media screen and (max-width: 576px) {
    width: 80px;
    height: 80px;
  }
`
