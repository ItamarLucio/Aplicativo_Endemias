import * as ImagePicker from 'expo-image-picker'

export const GetImageLibrary = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    base64: true,
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1
  })

  if (!result.canceled) {
    return result.assets[0].uri
  }
}
