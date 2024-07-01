import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const HomeScreen = () => {

  let ab = 10
  let cd = 20

  const onPress = () => {
    if(ab == cd) {
      console.log('ab === cd')
    }
    console.log('onPress', data)

    const expression = false

    if (expression) {
      return true;
    } else {
      return false;
    }
    
  }

  return (
    <SafeAreaView>
      <Text onPress={onPress}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen