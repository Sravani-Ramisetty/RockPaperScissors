// src/components/RulesPopup/index.js
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {PopupContainer, CloseButton, RulesImage} from './styledComponents'

const RulesPopup = () => (
  <Popup trigger={<button type="button">Rules</button>} modal nested>
    {close => (
      <PopupContainer>
        <CloseButton type="button" onClick={close}>
          <RiCloseLine />
        </CloseButton>
        <RulesImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </PopupContainer>
    )}
  </Popup>
)

export default RulesPopup
