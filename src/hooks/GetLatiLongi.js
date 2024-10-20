import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const GetLatiLongi = () => {
  useEffect(() => {
    (async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('location-data')
        const locaData = jsonValue != null ? JSON.parse(jsonValue) : null
        setLatitude(locaData.coords.latitude)
        setLongitude(locaData.coords.longitude)
      } catch (e) {
        // saving error
      }
    })()
  }, [])

  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()

  return [latitude, longitude]
}
