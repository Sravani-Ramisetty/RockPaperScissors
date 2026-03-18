// src/components/ResultView/styledComponents.js
import styled from 'styled-components'

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`

export const ChoiceCard = styled.div`
  text-align: center;
`

export const ChoiceImage = styled.img`
  width: 120px;
  height: 120px;
`

export const ResultText = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin: 20px 0;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
`
