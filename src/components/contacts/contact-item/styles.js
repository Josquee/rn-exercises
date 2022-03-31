import styled from 'styled-components/native'
import colors from '../../../config/colors'

export const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-color: ${colors.lightGray};
  border-bottom-width: 1px;
  padding: 12px 20px;
`

export const StyledImage = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
`
export const StyledTitle = styled.Text`
  color: ${({ white }) => white ? colors.white : colors.black};
  font-size: ${({ large }) => large ? '24px' : '18px'};
  font-weight: bold;
`

export const StyledText = styled.Text`
  color: ${({ white }) => white ? colors.white : colors.blueAlt};
  font-size: ${({ size }) => size};
`

StyledText.defaultProps = {
  size: '16px'
}
