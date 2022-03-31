import styled from 'styled-components/native'
import colors from '../../../config/colors'

export const ProfileView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 75px 0;
  background: ${colors.blue};
`

export const ProfileImage = styled.Image`
  border-radius: 50px;
  border-width: 2px;
  border-color: ${colors.white};
  margin-bottom: 16px;
  width: 100px;
  height: 100px;
`
