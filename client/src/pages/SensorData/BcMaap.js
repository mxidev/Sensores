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

const BcMaap = () => {

    const [dates, setDate] = useState([]);
    const [bc, setBc] = useState([]);

    useEffect(() => {
        async function obtenerDate() {
            const response = await fetch('http://localhost:5005/api/v1/bcmaap')
            const data = await response.json();
            setDate(data.fecha);
        }
        obtenerDate();
    }, []);

    useEffect(() => {
        async function obtenerBc() {
            const response = await fetch('http://localhost:5005/api/v1/bcmaap')
            const data = await response.json();
            setBc(data.BC);
        }
        obtenerBc();
    }, []);


    const data = {
        labels : dates.map((data) => data.value),
        datasets: [
            {
                label: "Black Carbon Data",
                data: bc.map((data) => data.value),
                borderColor: 'rgb(255, 99, 132)',
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
            <h2>Sensor: Black Carbon MAAP</h2>
            <hr />
            <Line data={data} options={options} />
            <Link to="/">Volver</Link>
        </main>
    )
}

export default BcMaap;