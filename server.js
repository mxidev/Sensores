const axios = require('axios');

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

function getData(){
  axios.post(urlData, data, config)
  .then(res => {
    //console.log("Token obtenido:",res.data.token)
    var token = res.data.token

    const sensorData = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': `Bearer ${token}`
        }
    }

    axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/723d0580-452d-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Fecha,Radon&startTs=1265046352083&endTs=1665029708303',
    sensorData)
      .then(res => console.log("Radon:",res.data))
      .catch(error => console.log("Error Sensor Radon:",error))

    axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/101d2fe0-454d-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=TIMESTAMP,WS,WD,Temp,RH,BP,Depth&startTs=1265046352083&endTs=1665043961492',
    sensorData)
      .then(res => console.log("\nMultimetro:",res.data))
      .catch(error => console.log("Error Sensor Multimetro:",error))
    
    axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/8c5ad790-454f-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Date,Time,BC1,BC2,BC3,BC4,BC5,BC6,BC7&startTs=1265046352083&endTs=1665044358966',
    sensorData)
      .then(res => console.log("\nBlack Carbon MAGEE:",res.data))
      .catch(error => console.log("Error Sensor Black Carbon-Magee:",error))

    axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/6a4dd7a0-4550-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=fecha,hora,BC&startTs=1265046352083&endTs=1665044739122',
    sensorData)
      .then(res => console.log("\nBlack Carbon MAAP:",res.data))
      .catch(error => console.log("Error Sensor Black Carbon-MAAP:",error))

    axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/efdd9590-4550-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Fecha,Hora,Albedo&startTs=1265046352083&endTs=1665044947549',
    sensorData)
      .then(res => console.log("\nRadiometro:",res.data))
      .catch(error => console.log("Error Sensor Radiometro:",error))

    axios.get('http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/99ce9f80-4557-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Fecha,TSP,PM10,PM4,PM2.5,PM1&startTs=1265046352083&endTs=1665048457821',
    sensorData)
      .then(res => console.log("\nMP-Grimm:",res.data))
      .catch(error => console.log("Error Sensor Grimm:",error))
    
      }
    )
  .catch(err => console.log("Error en POST:",err))

};

console.log("Mostrando datos...");
const getter = getData();

module.exports = getter;