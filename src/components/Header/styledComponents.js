// src/components/Header/styledComponents.js
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: #223a5f;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-family: 'Bree Serif';
  font-size: 24px;
  color: #ffffff;
`

export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px 20px;
  text-align: center;
`

export const ScoreLabel = styled.p`
  font-family: 'Bree Serif';
  font-size: 16px;
  color: #223a5f;
  margin: 0;
`

export const ScoreValue = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  color: #223a5f;
  margin: 0;
`
