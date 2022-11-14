
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();


var urlData = 'http://18.214.103.65:8080/api/auth/login'

const data = JSON.stringify({
  'username': 'alumnos@alumnos.org',
  'password': 'm7a/s99'
})

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  data : data
}


/* Middlewares */
app.use(express.json())
app.use(cors())
/* Middlewares */


/* Routes */
app.get('/api/v1/radon', (req, res) => { // Con esta ruta mostramos datos de Radon
    axios.post(urlData, data, config)
      .then(response => { // Este res es distinto al res del parametro del app.get()
    //console.log("Token obtenido:",res.data.token)

      var token = response.data.token
      const sensorData = {
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `Bearer ${token}`
          }
      }

      axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/723d0580-452d-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Fecha,Radon&startTs=1265046352083&endTs=1665029708303',
      sensorData)
        .then(response2 => {
            //console.log("Submiting data ...")
            res.send(response2.data)
        })
        .catch(error => console.log("Error Sensor Radon:",error))
        })
    .catch(err => console.log("Error en POST:",err))
})
app.get('/api/v1/bcmaap', (req, res) => { // Con esta ruta mostramos datos de BCMaap
    axios.post(urlData, data, config)
      .then(response => { // Este res es distinto al res del parametro del app.get()
    //console.log("Token obtenido:",res.data.token)

      var token = response.data.token
      const sensorData = {
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `Bearer ${token}`
          }
      }

      axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/6a4dd7a0-4550-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=fecha,hora,BC&startTs=1265046352083&endTs=1665044739122',
      sensorData)
        .then(response2 => {
            //console.log("Submiting data ...")
            res.send(response2.data)
        })
        .catch(error => console.log("Error Sensor Radon:",error))
        })
    .catch(err => console.log("Error en POST:",err))
})
app.get('/api/v1/bcmagee', (req, res) => { // Con esta ruta mostramos datos de BCMagee
    axios.post(urlData, data, config)
      .then(response => { // Este res es distinto al res del parametro del app.get()
    //console.log("Token obtenido:",res.data.token)

      var token = response.data.token
      const sensorData = {
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `Bearer ${token}`
          }
      }

      axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/8c5ad790-454f-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Date,Time,BC1,BC2,BC3,BC4,BC5,BC6,BC7&startTs=1265046352083&endTs=1665044358966',
      sensorData)
        .then(response2 => {
            //console.log("Submiting data ...")
            res.send(response2.data)
        })
        .catch(error => console.log("Error Sensor Radon:",error))
        })
    .catch(err => console.log("Error en POST:",err))
})
app.get('/api/v1/mpgrimm', (req, res) => { // Con esta ruta mostramos datos de Mp-Grimm
    axios.post(urlData, data, config)
      .then(response => { // Este res es distinto al res del parametro del app.get()
    //console.log("Token obtenido:",res.data.token)

      var token = response.data.token
      const sensorData = {
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `Bearer ${token}`
          }
      }

      axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/99ce9f80-4557-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Fecha,TSP,PM10,PM4,PM2.5,PM1&startTs=1265046352083&endTs=1665048457821',
      sensorData)
        .then(response2 => {
            //console.log("Submiting data ...")
            res.send(response2.data)
        })
        .catch(error => console.log("Error Sensor Radon:",error))
        })
    .catch(err => console.log("Error en POST:",err))
})
app.get('/api/v1/multiparametro', (req, res) => { // Con esta ruta mostramos datos de Multiparametro
    axios.post(urlData, data, config)
      .then(response => { // Este res es distinto al res del parametro del app.get()
    //console.log("Token obtenido:",res.data.token)

      var token = response.data.token
      const sensorData = {
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `Bearer ${token}`
          }
      }

      axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/101d2fe0-454d-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=TIMESTAMP,WS,WD,Temp,RH,BP,Depth &startTs=1265046352083&endTs=1665043961492',
      sensorData)
        .then(response2 => {
            //console.log("Submiting data ...")
            res.send(response2.data)
        })
        .catch(error => console.log("Error Sensor Radon:",error))
        })
    .catch(err => console.log("Error en POST:",err))
})
app.get('/api/v1/radiometro', (req, res) => { // Con esta ruta mostramos datos de Radiometro
    axios.post(urlData, data, config)
      .then(response => {

      var token = response.data.token
      const sensorData = {
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `Bearer ${token}`
          }
      }

      axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/efdd9590-4550-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Fecha,Hora,Albedo&startTs=1265046352083&endTs=1665044947549',
      sensorData)
        .then(response2 => {
            //console.log("Submiting data ...")
            res.send(response2.data)
        })
        .catch(error => console.log("Error Sensor Radon:",error))
        })
    .catch(err => console.log("Error en POST:",err))
})
// Y asi con los demas sensores ...

app.get('/api/v1/home', (req, res) => { // Esta es una ruta de prueba no mas
    res.send("Home!")
})
/* Routes */


// Puerto reservado para el servidor
app.listen(5005, () => console.log('Servidor arriba!'));
  
