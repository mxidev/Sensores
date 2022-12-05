import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

const Radon = () => {

    const [datos, setDatos] = useState([]);
    // const [fechas, setFechas] = useState([]);
    // var radonData = new Array();
    // var radonFecha = new Array();
    // var arrayData = new Array();
    // var arrayFecha = new Array();

    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch('http://localhost:5005/api/v1/radon')
            const data = await response.json();
            setDatos(data.Radon);
        }
        obtenerDatos();
    }, []);

    // radonData = datos // Array -> [{...},{ts:...,value:...},{...}, ... ,{...},{...}]
    // radonFecha = fechas // Array -> [{...},{ts:...,value:...},{...}, ... ,{...},{...}]

    // for(var i in datos){
    //     arrayData.unshift(parseInt(Object.values(radonData[i])[1],10)); // Array -> [value, value, ...]
    // }
    // for(var i in fechas){
    //     arrayFecha.unshift(Object.values(radonFecha[i])[1]); // Array -> [value, value, ...]
    // }
    // console.log(arrayData)
    // console.log(arrayFecha)

    const data = {
        labels : datos.map((data) => data.ts),
        datasets: [
            {
                label: "Radon Data",
                data: datos.map((data) => data.value),
                backgroundColor: "#FFE533"
            }
        ]
    }

    const options = {
        responsive: true
    }

    return (
        <main>
            <h1>Sensor: Radon</h1>
            <hr />
            <div>
                <Bar 
                    options={options}
                    data={data}
                />
            </div>
            <Link to="/">Volver</Link>
        </main>
    )
}

export default Radon;