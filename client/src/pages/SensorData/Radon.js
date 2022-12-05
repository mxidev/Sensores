import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    LineElement,
  } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

const Radon = () => {

    const [datos, setDatos] = useState([]);
    const [fechas, setFechas] = useState([]);

    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch('http://localhost:5005/api/v1/radon')
            const data = await response.json();
            setDatos(data.Radon);
        }
        obtenerDatos();
    }, []);

    useEffect(() => {
        async function obtenerFechas() {
            const response = await fetch('http://localhost:5005/api/v1/radon')
            const data = await response.json();
            setFechas(data.Fecha);
        }
        obtenerFechas();
    }, []);

    const data = {
        labels : fechas.map((data) => data.value),
        datasets: [
            {
                label: "Radon Data",
                data: datos.map((data) => data.value),
                borderColor: "dodgerblue",
                tension: 0.3,
                pointRadius: 1
            }
        ]
    }

    const options = {
        fill: true,
        animations: false,
        scales: {
          y: {
            min: 0,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      };

    return (
        <main className='maingraph'>
            <h2>Sensor: Radon</h2>
            <hr />
            <Line data={data} options={options} />
            <Link to="/">Volver</Link>
        </main>
    )

}

export default Radon;