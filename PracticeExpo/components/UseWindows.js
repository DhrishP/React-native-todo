import React from 'react'
import { View, useWindowDimensions,Text, SafeAreaView } from 'react-native'
import {s} from 'react-native-wind'

const UseWindows = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height
  return (
    <SafeAreaView style={s`${windowWidth>500?`w-container`:`w-1/2`} mt-10`}>
      <Text>
        Hi
      </Text>

    </SafeAreaView>
  )
}

export default UseWindows