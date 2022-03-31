import React from 'react'
import ContactProfile from '../../components/contacts/contact-profile/ContactProfile'

const ProfileScreenNavigator = () => {
  const profileName = { first: 'Donald', last: 'Trumpča' }
  return (
    <ContactProfile image="https://media.vanityfair.com/photos/623a35cde1237fe66e929ce0/master/w_2560%2Cc_limit/1228756580" title={profileName} subtitle="+1 20172021" />
  )
}

export default ProfileScreenNavigator
