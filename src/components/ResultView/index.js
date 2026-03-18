// src/components/ResultView/index.js
import {
  ResultContainer,
  ChoicesContainer,
  ChoiceCard,
  ChoiceImage,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const ResultView = ({yourChoice, opponentChoice, result, resetGame}) => (
  <ResultContainer>
    <ChoicesContainer>
      <ChoiceCard>
        <p>YOU</p>
        <ChoiceImage src={yourChoice.imageUrl} alt="your choice" />
      </ChoiceCard>
      <ChoiceCard>
        <p>OPPONENT</p>
        <ChoiceImage src={opponentChoice.imageUrl} alt="opponent choice" />
      </ChoiceCard>
    </ChoicesContainer>
    <ResultText>{result}</ResultText>
    <PlayAgainButton onClick={resetGame}>PLAY AGAIN</PlayAgainButton>
  </ResultContainer>
)

export default ResultView
