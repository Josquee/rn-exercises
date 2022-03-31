import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ContactsList from '../../components/contacts/ContactsList'
import ContactDetails from '../../components/contacts/ContactDetails'
import colors from '../../config/colors'

const Stack = createStackNavigator()

const ContactsScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={ContactsList} />
      <Stack.Screen name="Details" component={ContactDetails}
                    options={({ route }) => ({
                      title: route.params.user.name.first,
                      headerStyle: {
                        backgroundColor: colors.blue,
                        elevation: 10,
                        shadowColor: colors.black
                      },
                      headerTintColor: colors.white
                    })} />
    </Stack.Navigator>
  )
}

export default ContactsScreenNavigator
