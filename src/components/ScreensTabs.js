import React from 'react'
import FazerDenuncia from '../../src/screens/FazerDenuncia'
import MotivoDenuncia from '../../src/screens/MotivoDenuncia'
import DadosDenuncia from '../../src/screens/DadosDenuncia'
import DenunciaFeita from '../../src/screens/DenunciaFeita'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const ScreensTabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FazerDenuncia"
        component={FazerDenuncia}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MotivoDenuncia"
        component={MotivoDenuncia}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DadosDenuncia"
        component={DadosDenuncia}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DenunciaFeita"
        component={DenunciaFeita}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default ScreensTabs
