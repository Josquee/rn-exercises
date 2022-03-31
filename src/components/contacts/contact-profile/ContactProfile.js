import React from 'react'
import { View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { ProfileImage, ProfileView } from './styles'
import { StyledText, StyledTitle } from '../contact-item/styles'
import colors from '../../../config/colors'

const ContactProfile = ({ image, title, subtitle }) => {
  const fullName = () => {
    return `${title.first} ${title.last}`
  }
  return (
    <ProfileView>
      <ProfileImage source={{ uri: image }} />
      <StyledTitle white>{fullName()}</StyledTitle>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons style={{ marginRight: 5 }} name="phone" size={18} color={colors.white} />
        <StyledText white>{subtitle}</StyledText>
      </View>
    </ProfileView>
  )
}

export default ContactProfile
