import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import colors from '../../config/colors'

const HeaderIconView = styled.View`
  position: absolute;
  top: -42px;
  right: 16px;
  z-index: 1;
`

const HeaderIcon = ({ iconName, color = colors.white, onPress }) => {
  return (
    <HeaderIconView>
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons name={iconName} size={28} color={color} />
      </TouchableOpacity>
    </HeaderIconView>
  )
}

export default HeaderIcon
