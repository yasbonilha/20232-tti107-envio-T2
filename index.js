require('dotenv').config()
const axios = require('axios')

const {APPID, Q, COUNTRY, CNT} = process.env

// com o método .then()

// primeiro exercício: Consulta de coordenadas latitude/longitude em função do nome de uma cidade

const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${Q},${COUNTRY}&limit=${CNT}&appid=${APPID}`

const minhaPromise = axios.get(url1)
minhaPromise.then((res) => {
    let latitude = res.data[0]['lat']
    let longitude = res.data[0]['lon']
    console.log(`Latitude da cidade ${Q}: ${latitude}`)
    console.log(`Longitude da cidade ${Q}: ${longitude}`)
    console.log("*****************************")
    return [latitude, longitude]
})

// segundo exercício: Consulta de condições atuais em função de latitude/longitude
.then((res) => {
    lat = res[0]
    lon = res[1]
    const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}`

    const minhaPromise = axios.get(url2)
    minhaPromise.then((res) => {
        sens_ter = res.data.main.feels_like
        descricao = res.data.weather[0].description
        console.log(`a sensação térmica em ${Q} é: ${sens_ter}`)
        console.log(`a descrição do tempo em ${Q} é: ${descricao}`)

    })

})
