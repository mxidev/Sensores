
const axios = require('axios');
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


/* Routes */
app.get('/api/radon', (req, res) => { // Con esta ruta mostramos datos de Radon
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
            console.log("Submiting data ...")
            res.send(response2.data)
        })
        .catch(error => console.log("Error Sensor Radon:",error))
        })
    .catch(err => console.log("Error en POST:",err))
})
app.get('/api/radiometro', (req, res) => { // Con esta ruta mostramos datos de Radiometro
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
            console.log("Submiting data ...")
            res.send(response2.data)
        })
        .catch(error => console.log("Error Sensor Radon:",error))
        })
    .catch(err => console.log("Error en POST:",err))
})
// Y asi con los demas sensores ...

app.get('/api/home', (req, res) => { // Esta es una ruta de prueba no mas
    res.send("Home!")
})
/* Routes */


// Puerto reservado para el servidor
app.listen(3000, () => console.log('Servidor arriba!'));
  
