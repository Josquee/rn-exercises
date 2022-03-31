import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useQuery } from 'react-query'
import { fetchContacts } from '../../api/contactsList'

import ContactItem from './contact-item/ContactItem'

const ContactsList = ({ navigation }) => {
  const { data: contacts, isLoading } = useQuery('contacts', fetchContacts)
  const goToDetails = (user) => {
    navigation.navigate('Details', { user })
  }

  const renderContact = ({ item }) => (
    <ContactItem user={item} onPress={() => goToDetails(item)} />
  )

  return (
    <>
      {isLoading && (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      )}
      {!isLoading && (
        <FlatList data={contacts.results}
                  renderItem={renderContact}
                  keyExtractor={user => `${user.id.value}-${user.email}`} />
      )}
    </>
  )
}

export default ContactsList
