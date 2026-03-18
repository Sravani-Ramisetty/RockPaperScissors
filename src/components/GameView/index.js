// src/components/GameView/index.js
import {GameContainer, ChoiceButton, ChoiceImage} from './styledComponents'

const GameView = ({choicesList, playGame}) => (
  <GameContainer>
    {choicesList.map(choice => (
      <ChoiceButton
        key={choice.id}
        data-testid={`${choice.id.toLowerCase()}Button`}
        onClick={() => playGame(choice)}
      >
        <ChoiceImage src={choice.imageUrl} alt={choice.id} />
      </ChoiceButton>
    ))}
  </GameContainer>
)

export default GameView
