//Link para enviar os dados para o banco de dados
const apiUrl = 'https://7bd1-2804-29b8-500b-c31-61d3-ff7d-1d8f-3004.ngrok-free.app/api/receber-report'

export const sendDataToServer = async (data) => {
  try {
    await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.error('Error sending data:', error)
  }
}
