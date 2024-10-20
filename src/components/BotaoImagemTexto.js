import React from 'react'
import { Text, Image, StyleSheet, View } from 'react-native'

const BotaoImagemTexto = (props) => {
  const { textoStyle, texto, fonteImagem } = props
  const { imagemStyle, imagemPadd } = styles

  if (fonteImagem === '../../icons/bug.png') {
    return (
      <>
        <Text style={textoStyle}>{texto}</Text>
        <View style={imagemPadd}>
          <Image source={require('../../icons/bug.png')} style={imagemStyle} />
        </View>
      </>
    )
  } else if (fonteImagem === '../../icons/lixo.png') {
    return (
      <>
        <Text style={textoStyle}>{texto}</Text>
        <View style={imagemPadd}>
          <Image source={require('../../icons/lixo.png')} style={imagemStyle} />
        </View>
      </>
    )
  } else if (fonteImagem === '../../icons/scorpion.png') {
    return (
      <>
        <Text style={textoStyle}>{texto}</Text>
        <View style={imagemPadd}>
          <Image
            source={require('../../icons/scorpion.png')}
            style={imagemStyle}
          />
        </View>
      </>
    )
  } else {
    return (
      <>
        <Text style={textoStyle}>{texto}</Text>
        <View style={imagemPadd}>
          <Image
            source={require('../../icons/mosquito.png')}
            style={imagemStyle}
          />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  imagemStyle: {
    width: 55,
    height: 55,
    tintColor: 'white'
  },
  imagemPadd: {
    width: 80,
    height: 80,
    backgroundColor: '#06417B',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default BotaoImagemTexto
