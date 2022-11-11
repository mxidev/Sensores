/* Consumo de datos en la BBDD */

// Mongoose requiere saber como son los componentes de la BBDD
const mongoose = require('mongoose');

// Esquema (Esqueleto del modelo)
const sensorSchema = mongoose.Schema({
    
    info: {
        _postman_id: String,
        name: String,
        schema: String
    },
    item: [
        {
            name: String,
            request: {
                method: String,
                header: [
                    {
                        key: String,
                        value: String,
                        type: String
                    },
                    {
                        key: String,
                        value: String,
                        type: String
                    }
                ],
                url: {
                    raw: String,
                    protocol: String,
                    host: [
                        String, String, String, String
                    ],
                    port: String,
                    path: [
                        String, String, String, String, String, String, String
                    ],
                    query: [
                        {
                            key: String,
                            value: String,
                            description: String
                        },
                        {
                            key: String,
                            value: String
                        },
                        {
                            key: String,
                            value: String
                        }
                    ]
                }
            },
            response: []
        }
    ]
});

const Sensor = mongoose.model('sensor',sensorSchema);

module.exports = Sensor;