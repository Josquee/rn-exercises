import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import TABS from './config/tabs'

const Tab = createBottomTabNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
        {TABS.map(({ name, component, defaultIcon, showHeader }) => {
          return (
            <Tab.Screen key={name} name={name} component={component}
                        options={() => ({
                          tabBarIcon: ({ color, size }) => {
                            return <MaterialIcons name={defaultIcon} size={size} color={color} />
                          },
                          headerShown: showHeader
                        })} />
          )
        })}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
