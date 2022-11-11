/* Creacion del servidor para levantar una API con Express */

// Se llama a express y axios
const express = require('express');

// Creamos la aplicacion
const app = express();


// Conexion a DB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Project')
    .then(() => console.log('Conectado a BBDD -> Project'))
// Conexion a DB


// Modelo del sensor (la forma en que se van a mostrar los datos recogidos)
const Sensor = require('./models/sensor.model')
// LLamado a la extraccion de los datos
const getter = require('./http')


/* Routes */
app.get('/api/data', (req,res) =>
    getter
        .then(data => res.json(data))
        .catch(err => console.log(err))
)
app.get('/api/sensors', (req,res) => 
    Sensor
        .find()
        .then(allSensors => res.json(allSensors))
)
app.get('/api/details/:sensor_id', (req,res) => {

    const { sensor_id } = req.params

    Sensor
        .findById(sensor_id)
        .then(sensor => res.json(sensor))
})
/* Routes */


// Puerto reservado para el servidor
app.listen(3000, () => console.log('Servidor arriba!'));

// Arranque: sudo mongod --dbpath /var/lib/mongodb