import { useState, useEffect } from 'react'
import * as Location from 'expo-location'

export const GetLocation = () => {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permissão para acessar localização foi negada')
        return
      }

      try {
        const timeoutId = setTimeout(() => {
          setError('Tempo esgotado ao obter a localização')
          setLoading(false)
        }, 10000)

        let location = await Location.getCurrentPositionAsync({})

        clearTimeout(timeoutId)

        setLocation(location)
      } catch (e) {
        setError('Não foi possível obter sua Localização')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState()

  return [loading, error, location]
}
