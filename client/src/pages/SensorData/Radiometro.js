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
    BarElement
  } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

const Radiometro = () => {

    const [dates, setDate] = useState([]);
    const [albedo, setAlbedo] = useState([]);

    useEffect(() => {
        async function obtenerDate() {
            const response = await fetch('http://localhost:5005/api/v1/radiometro')
            const data = await response.json();
            setDate(data.Hora);
        }
        obtenerDate();
    }, []);

    useEffect(() => {
        async function obtenerAlbedo() {
            const response = await fetch('http://localhost:5005/api/v1/radiometro')
            const data = await response.json();
            setAlbedo(data.Albedo);
        }
        obtenerAlbedo();
    }, []);


    const data = {
        labels : dates.map((data) => data.value),
        datasets: [
            {
                label: "Albedo Data",
                data: albedo.map((data) => data.value),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'dodgerblue',
                tension: 0.4,
                pointRadius: 3
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
            <h2>Sensor: Radiometro</h2>
            <hr />
            <Bar data={data} options={options} />
            <Link to="/">Volver</Link>
        </main>
    )
}

export default Radiometro;