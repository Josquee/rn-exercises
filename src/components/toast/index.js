import React from 'react'

import { StyledView, StyledText } from './styles'

const Toast = ({ title, text, color }) => {
  return (
    <StyledView>
      <StyledText large color={color}>{title}</StyledText>
      <StyledText>{text}</StyledText>
    </StyledView>
  )
}

export default Toast
