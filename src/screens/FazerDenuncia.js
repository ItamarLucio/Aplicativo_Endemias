import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Linking,
  StatusBar
} from 'react-native'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins'
import BotaoIconeTexto from '../components/BotaoIconeTexto'
import { LinearGradient } from 'expo-linear-gradient'

const FazerDenuncia = ({ navigation }) => {
  const {
    container,
    wrapperDenuncia,
    textoDenuncia,
    wrapperOutraOpcao,
    TextoOutraOpcao,
    sombra,
    logo,
    header,
    logoPrefeitura,
    textoVig,
    traco
  } = styles

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  })
  if (!fontsLoaded) {
    return null
  }

  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err))
  }

  return (
    <LinearGradient colors={['#093F78', '#017DFF']} style={container}>
      <StatusBar backgroundColor="#093F78" />
      <View style={header}>
        <Image
          source={require('../../assets/logoJuazeiro2.png')}
          style={logo}
        />
        <Image />
        <Image
          source={require('../../assets/logoPrefeitura.png')}
          style={logoPrefeitura}
        />
        <Image />
        <View style={traco} />
        <Text style={textoVig}>Núcleo de Endemias</Text>
      </View>

      <TouchableOpacity
        style={[wrapperDenuncia, sombra]}
        onPress={() => navigation.navigate('MotivoDenuncia')}
      >
        <BotaoIconeTexto
          nomeIcone={'alert-triangle'}
          tamanhoIcone={110}
          corItem={'#BE4048'}
          textoStyle={textoDenuncia}
          texto={'Reportar problema'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[wrapperOutraOpcao, sombra]}
        onPress={() => openURL('https://www.juazeirodonorte.ce.gov.br/')}
      >
        <BotaoIconeTexto
          nomeIcone={'globe'}
          tamanhoIcone={47}
          corItem={'#3F45B6'}
          textoStyle={TextoOutraOpcao}
          texto={'Nosso site'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[wrapperOutraOpcao, sombra]}
        onPress={() =>
          openURL('https://www.instagram.com/prefjuazeirodonorte/?hl=pt-br')
        }
      >
        <BotaoIconeTexto
          nomeIcone={'instagram'}
          tamanhoIcone={47}
          corItem={'#3F45B6'}
          textoStyle={TextoOutraOpcao}
          texto={'Instagram'}
        />
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 35,
    backgroundColor: '#637EFF'
  },
  wrapperDenuncia: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 310,
    height: 285,
    borderRadius: 10,
    gap: 10
  },
  sombra: {
    elevation: 7
  },
  textoDenuncia: {
    fontSize: 34,
    color: '#BE4048',
    width: 175,
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    lineHeight: 40,
    paddingTop: 5
  },
  wrapperOutraOpcao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: 310,
    height: 75,
    gap: 15
  },
  TextoOutraOpcao: {
    color: '#3F45B6',
    fontSize: 30,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 5
  },
  header: {
    flexDirection: 'row',
    width: 330,
    height: 65,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 65,
    height: 65,
    alignSelf: 'center',
    objectFit: 'contain'
  },
  logoPrefeitura: {
    width: 120,
    height: 65,
    alignSelf: 'center',
    objectFit: 'contain'
  },
  textoVig: {
    color: 'white',
    fontSize: 23,
    width: 120,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    lineHeight: 30,
    paddingTop: 3
  },
  traco: {
    width: 1,
    height: 65,
    backgroundColor: 'white'
  }
})
export default FazerDenuncia
