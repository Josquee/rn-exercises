import AsyncStorage from '@react-native-async-storage/async-storage'

export const asGet = async (key) => {
  const value = await AsyncStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

export const asSave = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e)
  }
}

export const asRemove = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log(e)
  }
}
