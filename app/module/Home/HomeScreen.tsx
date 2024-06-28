import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const HomeScreen = () => {

  const onPress = () => {
    console.log('onPress', data)
  }
  return (
    <SafeAreaView>
      <Text onPress={onPress}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen