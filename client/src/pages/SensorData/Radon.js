import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';

const Radon = () => {

    const [datos, setDatos] = useState([]);
    const [fechas, setFechas] = useState([]);
    var radonData = new Array();
    var radonFecha = new Array();
    var arrayData = new Array();
    var arrayFecha = new Array();

    useEffect(() => {
        axios.get('http://localhost:5005/api/v1/radon')
            .then(res => {
                const data = res.data;
                setDatos(data.Radon)
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5005/api/v1/radon')
            .then(res => {
                const data = res.data;
                setFechas(data.Fecha)
            })
    }, [])

    radonData = datos // Array -> [{...},{ts:...,value:...},{...}, ... ,{...},{...}]
    radonFecha = fechas // Array -> [{...},{ts:...,value:...},{...}, ... ,{...},{...}]

    for(var i in datos){
        arrayData.unshift(parseInt(Object.values(radonData[i])[1],10)); // Array -> [value, value, ...]
    }
    for(var i in fechas){
        arrayFecha.unshift(Object.values(radonFecha[i])[1]); // Array -> [value, value, ...]
    }
    console.log(arrayData)
    console.log(arrayFecha)

    var data = [
        ["Fecha", "Data"],
        ["2004", 1000],
        ["2005", 1170],
        ["2006", 660],
        ["2007", 460],
        ["2008", 400],
        ["2009", 1120],
        ["2010", 540]
        // esta es la idea --> [fecha, data]
    ]
    var options = {
        title: 'Radon Data',
        curveType: 'function',
        legend: {
            position: "bottom"
        }
    }

    return (
        <main>
            <h1>Sensor: Radon</h1>
            <hr />
            <Chart
                chartType="LineChart"
                width="100%"
                height="500px"
                data={data}
                options={options}
            />
            <Link to="/">Volver</Link>
        </main>
    )
}

export default Radon;