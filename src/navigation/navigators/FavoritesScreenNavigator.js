import React, { useCallback, useState } from 'react'
import { FlatList, Image, Text, View, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import colors from '../../config/colors'
import { asGet } from '../../utils/asyncStorageController'

const FavoritesScreenNavigator = () => {
  const [favorites, setFavorites] = useState([])
  useFocusEffect(
    useCallback(() => {
      const unsubscribe = fetchFavorites().then(res => setFavorites(res))
      return () => unsubscribe
    }, [])
  )

  const fetchFavorites = async () => {
    return await asGet('favorites')
  }

  return (
    <View style={styles.wrapper}>
      {(!favorites || !favorites.length) && (
        <View>
          <Text style={styles.noFavoritesText}>No favorites added</Text>
        </View>
      )}
      {favorites && (
        <FlatList data={favorites}
                  numColumns="3"
                  renderItem={({ item }) => (
                    <Image style={styles.image} source={{ uri: item.picture.large }} />
                  )}
                  keyExtractor={item => item.email} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noFavoritesText: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    borderRadius: 45,
    width: 90,
    height: 90,
    marginHorizontal: 15,
    marginVertical: 25
  }
})

export default FavoritesScreenNavigator
