import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  StatusBar
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins'

const DenunciaFeita = ({ navigation }) => {
  const {
    container,
    textoEnvi,
    textoAgra,
    textWrap,
    botaoVoltar,
    textoBotao,
    checkTextContainer,
    iconWrap
  } = styles

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })
  if (!fontsLoaded) {
    return null
  }

  return (
    <LinearGradient colors={['#093F78', '#017DFF']} style={container}>
      <StatusBar backgroundColor="#093F78" />
      <View style={checkTextContainer}>
        <View style={iconWrap}>
          <FontAwesome5 name="check" size={100} color="#06417B" />
        </View>
        <View style={textWrap}>
          <Text style={textoEnvi}>Problema reportado!</Text>
          <Text style={textoAgra}>A cidade agradece.</Text>
        </View>
      </View>
      <TouchableOpacity
        style={botaoVoltar}
        onPress={() => navigation.navigate('FazerDenuncia')}
      >
        <Text style={textoBotao}>Retornar</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3F45B6'
  },
  checkTextContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  iconWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 157,
    height: 157,
    borderRadius: 100,
    alignSelf: 'center'
  },
  textWrap: {
    width: 280,
    alignItems: 'center',
    marginTop: 20,
    gap: 5
  },
  textoEnvi: {
    color: 'white',
    fontSize: 43,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
    lineHeight: 48,
    height: 100,
    paddingTop: 5
  },
  textoAgra: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Poppins_400Regular'
  },
  botaoVoltar: {
    width: 310,
    height: 85,
    elevation: 5,
    backgroundColor: '#06417B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  textoBotao: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Poppins_500Medium',
    paddingTop: 5
  }
})

export default DenunciaFeita
