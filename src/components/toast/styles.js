import styled from 'styled-components/native'
import colors from '../../config/colors'

export const StyledView = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 4px;
  padding: 8px;
  background: ${colors.white};
`

export const StyledText = styled.Text`
  color: ${({ color }) => color};
  font-size: ${({ large }) => large ? '16px' : '14px'};
`

StyledText.defaultProps = {
  color: colors.black
}
