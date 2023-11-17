require('dotenv').config()
const axios = require('axios')

const {APPID, Q, COUNTRY, CNT} = process.env


// com os métodos async e await - exercícios 01 e 02

const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${Q},${COUNTRY}&limit=${CNT}&appid=${APPID}`

const ex01 = async () => {
    const result1 = (await axios.get(url1)).data
    let lat = result1[0]['lat']
    let lon = result1[0]['lon']
    console.log('\nexercício com async e await\n')
    console.log(`Latitude da cidade ${Q}: ${lat}`)
    console.log(`Longitude da cidade ${Q}: ${lon}`)
    console.log("*****************************")

    const ex02 = async () => {
        const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}`
        const result2 = (await axios.get(url2)).data
        sens_ter = result2.main.feels_like
        descricao = result2.weather[0].description
        console.log('\nexercício com async e await\n')
        console.log(`a sensação térmica em ${Q} é: ${sens_ter}`)
        console.log(`a descrição do tempo em ${Q} é: ${descricao}`)
        console.log("*****************************")
    }

    ex02()
    
}
ex01()

// com o método .then()

// primeiro exercício: Consulta de coordenadas latitude/longitude em função do nome de uma cidade

const minhaPromise = axios.get(url1)
minhaPromise.then((res) => {
    let latitude = res.data[0]['lat']
    let longitude = res.data[0]['lon']
    console.log('\nexercício com o método .then()\n')
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
        console.log('\nexercício com o método .then()\n')
        console.log(`a sensação térmica em ${Q} é: ${sens_ter}`)
        console.log(`a descrição do tempo em ${Q} é: ${descricao}`)
        console.log("*****************************")
    })

})
