import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { StyledImage, StyledText, StyledTitle, StyledView } from './styles'
import colors from '../../../config/colors'

const ContactItem = ({ user, subtitle, icon, onPress }) => {
  const fullName = () => {
    if (typeof user?.name === 'object') {
      return `${user.name.first} ${user.name.last}`
    }
    return user
  }
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <StyledView>
        {user?.picture?.large && <StyledImage source={{ uri: user?.picture?.large }} />}
        {icon && <MaterialIcons name={icon} size={24} color={colors.black} />}
        <View style={styles.info}>
          <StyledTitle>{fullName()}</StyledTitle>
          <StyledText>{user?.phone || subtitle}</StyledText>
        </View>
      </StyledView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  info: {
    marginLeft: 24
  }
})

export default ContactItem
