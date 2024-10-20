import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  ActivityIndicator
} from 'react-native'
import TextInputText from '../components/TextInputText'
import { Feather } from '@expo/vector-icons'
import { GetImageLibrary } from '../hooks/GetImageLibrary'
import { GetImageCamera } from '../hooks/GetImageCamera'
import IconeMotivo from '../components/IconeMotivo'
import { LinearGradient } from 'expo-linear-gradient'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins'
import Modal from 'react-native-modal'
import { GetLatiLongi } from '../hooks/GetLatiLongi'
import { sendDataToServer } from '../../api/sendDataToServer'
import { uploadToFirebase } from '../../firebase-config'

const DadosDenuncia = ({ route, navigation }) => {
  const {
    container,
    wrapperTitle,
    textoDenuncia,
    nomeDenuncia,
    wrapperLista,
    botaoEnviar,
    textoEnv,
    sectionHeader,
    inputTexto,
    botaoImagemWrap,
    botaoImagem,
    imagePreview,
    scrollStyle,
    textoIcone,
    imageModal,
    viewModal,
    isMissingView,
    isMissingTxt,
    botaoLoc,
    textoLoc
  } = styles

  const { motivo, numero } = route.params
  const [image, setImage] = useState()

  const [isModalVisible, setModalVisible] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const [latitude, longitude] = GetLatiLongi()

  const [nomeCidadao, setNomeCidadao] = useState('')
  const nomeCidadaoInput = (nome) => {
    setNomeCidadao(nome)
  }
  const [ender, setEnder] = useState('')
  const enderInput = (enderValue) => {
    setEnder(enderValue)
  }
  const usarLocalizacaoAtual = () => {
    setEnder(`${latitude}, ${longitude}`)
    setIsEditable(false)
    setCorTexto({ color: '#505050' })
  }

  const [isMissing, setIsMissing] = useState(false)
  const [taEnviando, setTaEnviando] = useState(false)
  const [isEditable, setIsEditable] = useState(true)
  const [corTexto, setCorTexto] = useState()

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })
  if (!fontsLoaded) {
    return null
  }

  const handleEnviar = async () => {
    if (ender && nomeCidadao) {
      try {
        if (image) {
          setTaEnviando(true)

          const uploadResp = await uploadToFirebase(
            image,
            image.match(/\/([^\/]+)$/)[1]
          )

          const dataToSend = {
            type: numero,
            location: ender,
            citizen: nomeCidadao,
            photo: uploadResp.downloadUrl
          }

          await sendDataToServer(dataToSend)
          navigation.navigate('DenunciaFeita')
          setTaEnviando(false)
        } else {
          setTaEnviando(true)

          const dataToSend = {
            type: numero,
            location: ender,
            citizen: nomeCidadao
          }

          await sendDataToServer(dataToSend)
          navigation.navigate('DenunciaFeita')
          setTaEnviando(false)
        }
      } catch (error) {
        console.error('Falha ao Enviar, verifique sua conexão com a internet')
      }
    } else {
      setIsMissing(true)
    }
  }

  return (
    <LinearGradient colors={['#093F78', '#017DFF']} style={container}>
      <StatusBar backgroundColor="#093F78" />
      <View style={wrapperTitle}>
        {image ? (
          <TouchableOpacity
            onPress={() => {
              toggleModal()
            }}
          >
            <Image source={{ uri: image }} style={imagePreview} />
          </TouchableOpacity>
        ) : (
          <IconeMotivo motivo={motivo} />
        )}

        <View>
          <Text style={textoDenuncia}>Ocorrência de</Text>
          <Text style={[textoDenuncia, nomeDenuncia]}>{motivo}</Text>
        </View>
      </View>

      <View style={wrapperLista}>
        <View style={scrollStyle}>
          <TextInputText
            headerStyle={sectionHeader}
            header={'Nome'}
            placeho={'Seu nome'}
            textInputStyle={inputTexto}
            childToParent={nomeCidadaoInput}
            value={nomeCidadao}
          />
          <TextInputText
            headerStyle={sectionHeader}
            header={'Endereço'}
            placeho={'Rua, número e bairro'}
            textInputStyle={inputTexto}
            childToParent={enderInput}
            value={ender}
            editable={isEditable}
            textCor={corTexto}
          />
          <TouchableOpacity style={botaoLoc} onPress={usarLocalizacaoAtual}>
            <Text style={textoLoc}>Usar Localização Atual</Text>
          </TouchableOpacity>
          <View>
            <Text style={sectionHeader}>{'Imagem'}</Text>

            <View style={botaoImagemWrap}>
              <TouchableOpacity
                style={botaoImagem}
                onPress={async () => {
                  const uriValue = await GetImageCamera()
                  setImage(uriValue)
                }}
              >
                <Text style={textoIcone}>Tirar{'\n'}Foto</Text>
                <Feather name="camera" size={40} color="#3F45B6" />
              </TouchableOpacity>
              <TouchableOpacity
                style={botaoImagem}
                onPress={async () => {
                  const uriValue = await GetImageLibrary()
                  setImage(uriValue)
                }}
              >
                <Text style={textoIcone}>Fazer{'\n'}Upload</Text>
                <Feather name="folder" size={40} color="#3F45B6" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {isMissing ? (
        <View style={isMissingView}>
          <Text style={isMissingTxt}>Informações faltando</Text>
        </View>
      ) : (
        false
      )}

      {taEnviando ? (
        <TouchableOpacity style={botaoEnviar}>
          <ActivityIndicator size={'large'} color={'white'} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={botaoEnviar} onPress={handleEnviar}>
          <Text style={textoEnv}>Enviar</Text>
        </TouchableOpacity>
      )}

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        animationIn="fadeIn"
        animationOutTiming={1}
      >
        <View style={viewModal}>
          <Image source={{ uri: image }} style={imageModal} />
        </View>
      </Modal>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    backgroundColor: '#637EFF'
  },
  wrapperTitle: {
    width: 310,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 70
  },
  textoDenuncia: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    lineHeight: 40
  },
  nomeDenuncia: {
    fontFamily: 'Poppins_600SemiBold'
  },
  wrapperLista: {
    width: 310
  },
  scrollStyle: {
    gap: 15
  },
  botaoEnviar: {
    backgroundColor: '#06417B',
    width: 310,
    height: 95,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7
  },
  textoEnv: {
    color: 'white',
    fontSize: 45,
    fontFamily: 'Poppins_500Medium',
    paddingTop: 10
  },
  sectionHeader: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'Poppins_400Regular'
  },
  inputTexto: {
    borderRadius: 5,
    backgroundColor: 'white',
    height: 70,
    paddingLeft: 15,
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 5,
    color: '#06417B'
  },
  botaoImagemWrap: {
    flexDirection: 'row',
    gap: 10
  },
  botaoImagem: {
    flexDirection: 'row',
    borderRadius: 5,
    height: 70,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 7,
    gap: 10
  },
  textoIcone: {
    color: '#3F45B6',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    paddingTop: 5,
    textAlign: 'center',
    width: 72,
    lineHeight: 25
  },
  imagePreview: {
    borderRadius: 5,
    height: 75,
    width: 75,
    borderColor: 'white',
    borderWidth: 1,
    objectFit: 'contain'
  },
  viewModal: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  isMissingTxt: {
    fontFamily: 'Poppins_400Regular',
    color: '#E30B0B',
    fontSize: 20
  },
  isMissingView: {
    borderRadius: 5,
    backgroundColor: 'white',
    width: 230,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageModal: {
    width: 350,
    height: 350,
    objectFit: 'contain'
  },
  botaoLoc: {
    backgroundColor: '#06417B',
    width: 310,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7
  },
  textoLoc: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins_500Medium'
  }
})
export default DadosDenuncia
