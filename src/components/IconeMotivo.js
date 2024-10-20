import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const IconeMotivo = (props) => {
  const { motivo } = props
  const { iconeStyle, iconePadd } = styles

  if (motivo === 'Barbeiro') {
    return (
      <View style={iconePadd}>
        <Image source={require('../../icons/bug.png')} style={iconeStyle} />
      </View>
    )
  } else if (motivo === 'Aedes A.') {
    return (
      <View style={iconePadd}>
        <Image
          source={require('../../icons/mosquito.png')}
          style={iconeStyle}
        />
      </View>
    )
  } else if (motivo === 'Casa/Terreno') {
    return (
      <View style={iconePadd}>
        <Image source={require('../../icons/lixo.png')} style={iconeStyle} />
      </View>
    )
  } else {
    return (
      <View style={iconePadd}>
        <Image
          source={require('../../icons/scorpion.png')}
          style={iconeStyle}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconeStyle: {
    width: 55,
    height: 55,
    tintColor: '#06417B'
  },
  iconePadd: {
    width: 75,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default IconeMotivo
