import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import ScreensTabs from './src/components/ScreensTabs'
import { GetLocation } from './src/hooks/GetLocation'
import ErrorItem from './src/components/ErrorItem'
import LoadingItem from './src/components/LoadingItem'
import { LinearGradient } from 'expo-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {
  const [loading, error, location] = GetLocation()

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('location-data', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  if (!loading && !error) {
    storeData(location)

    return (
      <NavigationContainer>
        <ScreensTabs />
      </NavigationContainer>
    )
  }
  return (
    <LinearGradient colors={['#093F78', '#017DFF']} style={styles.container}>
      {error ? <ErrorItem /> : <LoadingItem />}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 30,
    backgroundColor: '#637EFF'
  }
})

export default App
