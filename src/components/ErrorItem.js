import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const ErrorItem = () => {
  const { container, errorMessage } = styles
  return (
    <LinearGradient colors={['#093F78', '#017DFF']} style={container}>
      <Text style={errorMessage}>Não foi possível obter sua localização</Text>
      <Feather name={'frown'} size={100} color={'white'} />
      <Text style={errorMessage}>
        Por favor verifique sua conexão com a internet e tente abrir o
        aplicativo novamente
      </Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  errorMessage: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'center'
  }
})
export default ErrorItem
