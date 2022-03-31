import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text } from 'react-native'

import ContactProfile from './contact-profile/ContactProfile'
import ContactItem from './contact-item/ContactItem'
import HeaderIcon from '../common/HeaderIcon'

import colors from '../../config/colors'
import { asGet, asSave } from '../../utils/asyncStorageController'
import Toast from '../toast'

const notification = {
  visible: false,
  color: colors.black,
  title: '',
  text: ''
}

const ContactDetails = ({ route }) => {
  const { user } = route?.params
  const [favorites, setFavorites] = useState([])
  const [isFavorite, setIsFavorite] = useState(null)
  const [toastConfig, setToastConfig] = useState(notification)
  const contactInfo = [
    { title: 'Email', subtitle: user.email, icon: 'email' },
    { title: 'Work', subtitle: user.phone, icon: 'phone' },
    { title: 'Personal', subtitle: user.cell, icon: 'smartphone' }
  ]

  useEffect(() => {
    const unsubscribe = fetchFavorites().then(res => {
      setFavorites(res)
      setIsFavorite(!!res?.find(i => i.email === user.email))
    })
    return () => unsubscribe
  }, [user.email])

  const fetchFavorites = async () => {
    return await asGet('favorites')
  }
  const addToFavorites = () => {
    setIsFavorite(true)
    setToast('Success', 'User added to favorites')
    if (favorites !== null) {
      asSave('favorites', [...favorites, user])
    } else {
      asSave('favorites', [user])
    }
  }
  const removeFromFavorites = () => {
    setIsFavorite(false)
    setToast('Success', 'User removed from favorites')
    asSave('favorites', favorites?.filter(i => i.email !== user.email))
    setFavorites(prev => prev?.filter(i => i.email !== user.email))
  }
  const setToast = (title, text) => {
    setToastConfig({
      visible: true,
      color: colors.green,
      title,
      text
    })
    setTimeout(() => {
      setToastConfig({
        visible: false
      })
    }, 2500)
  }

  return (
    <>
      <HeaderIcon iconName="star-rate"
                  color={isFavorite ? colors.black : colors.white}
                  onPress={isFavorite ? removeFromFavorites : addToFavorites} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ContactProfile image={user?.picture?.large} title={user?.name} subtitle={user?.phone} />
        {contactInfo?.map(i => {
          return <ContactItem key={i.subtitle}
                              user={i.title}
                              subtitle={i.subtitle}
                              icon={i.icon} />
        })}
      </ScrollView>
      {toastConfig.visible && (
        <Toast title={toastConfig.title} text={toastConfig.text} color={toastConfig.color} />
      )}
    </>
  )
}

export default ContactDetails
