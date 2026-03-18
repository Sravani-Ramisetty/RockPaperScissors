// src/components/Header/index.js
import {
  HeaderContainer,
  Title,
  ScoreCard,
  ScoreLabel,
  ScoreValue,
} from './styledComponents'

const Header = ({score}) => (
  <HeaderContainer>
    <Title>ROCK PAPER SCISSORS</Title>
    <ScoreCard>
      <ScoreLabel>Score</ScoreLabel>
      <ScoreValue>{score}</ScoreValue>
    </ScoreCard>
  </HeaderContainer>
)

export default Header
