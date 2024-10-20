import React from 'react'
import { Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import BotaoImagemTexto from '../components/BotaoImagemTexto'
import { LinearGradient } from 'expo-linear-gradient'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins'

const MotivoDenuncia = ({ navigation }) => {
  const { container, textoMotivo, wrapperMotivo, botaoTexto } = styles

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  })
  if (!fontsLoaded) {
    return null
  }

  return (
    <LinearGradient colors={['#093F78', '#017DFF']} style={container}>
      <StatusBar backgroundColor="#093F78" />
      <Text style={textoMotivo}>Qual o motivo do seu contato?</Text>

      <TouchableOpacity
        style={wrapperMotivo}
        onPress={() =>
          navigation.navigate('DadosDenuncia', {
            motivo: 'Aedes A.',
            numero: 0
          })
        }
      >
        <BotaoImagemTexto
          wrapperStyle={wrapperMotivo}
          textoStyle={botaoTexto}
          texto={'Aedes \nAegypti'}
          fonteImagem={'../../icons/mosquito.png'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={wrapperMotivo}
        onPress={() =>
          navigation.navigate('DadosDenuncia', {
            motivo: 'Barbeiro',
            numero: 1
          })
        }
      >
        <BotaoImagemTexto
          wrapperStyle={wrapperMotivo}
          textoStyle={botaoTexto}
          texto={'Barbeiro'}
          fonteImagem={'../../icons/bug.png'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={wrapperMotivo}
        onPress={() =>
          navigation.navigate('DadosDenuncia', {
            motivo: 'Casa/Terreno',
            numero: 2
          })
        }
      >
        <BotaoImagemTexto
          wrapperStyle={wrapperMotivo}
          textoStyle={botaoTexto}
          texto={'Casa fechada, \nTerreno baldio'}
          fonteImagem={'../../icons/lixo.png'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={wrapperMotivo}
        onPress={() =>
          navigation.navigate('DadosDenuncia', {
            motivo: 'Escorpião',
            numero: 3
          })
        }
      >
        <BotaoImagemTexto
          wrapperStyle={wrapperMotivo}
          textoStyle={botaoTexto}
          texto={'Escorpião'}
          fonteImagem={'../../icons/scorpion.png'}
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
    gap: 25,
    backgroundColor: '#637EFF'
  },
  textoMotivo: {
    fontSize: 38,
    width: 340,
    color: 'white',
    marginBottom: 15,
    fontFamily: 'Poppins_500Medium',
    paddingTop: 5,
    lineHeight: 45
  },
  wrapperMotivo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: 340,
    height: 115,
    padding: 20,
    elevation: 7
  },
  botaoTexto: {
    color: '#06417B',
    fontSize: 28,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 5,
    lineHeight: 35
  }
})
export default MotivoDenuncia
