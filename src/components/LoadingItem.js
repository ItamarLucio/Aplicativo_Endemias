import React from 'react'
import { Image, StyleSheet, ActivityIndicator } from 'react-native'

const LoadingItem = () => {
  const { logo } = styles
  return (
    <>
      <Image source={require('../../assets/logoJuazeiro.png')} style={logo} />
      <ActivityIndicator size={'large'} color={'white'} />
    </>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 240,
    alignSelf: 'center'
  }
})
export default LoadingItem
