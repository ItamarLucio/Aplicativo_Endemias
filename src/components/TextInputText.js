import React from 'react'
import { View, Text, TextInput } from 'react-native'

const TextInputText = (props) => {
  const {
    headerStyle,
    header,
    placeho,
    textInputStyle,
    childToParent,
    value,
    editable,
    textCor
  } = props

  return (
    <View>
      <Text style={headerStyle}>{header}</Text>
      <TextInput
        style={[textInputStyle, textCor]}
        cursorColor={'#3F45B6'}
        placeholder={placeho}
        placeholderTextColor="#3F45B6"
        onChangeText={(val) => {
          childToParent(val)
        }}
        value={value}
        editable={editable}
      />
    </View>
  )
}

export default TextInputText
