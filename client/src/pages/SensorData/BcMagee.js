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

const BcMagee = () => {

    const [dates, setDate] = useState([]);
    const [bc1, setBc1] = useState([]);
    const [bc2, setBc2] = useState([]);
    const [bc3, setBc3] = useState([]);

    useEffect(() => {
        async function obtenerDate() {
            const response = await fetch('http://localhost:5005/api/v1/bcmagee')
            const data = await response.json();
            setDate(data.Date);
        }
        obtenerDate();
    }, []);
    
    useEffect(() => {
        async function obtenerBc1() {
            const response = await fetch('http://localhost:5005/api/v1/bcmagee')
            const data = await response.json();
            setBc1(data.BC1);
        }
        obtenerBc1();
    }, []);

    useEffect(() => {
        async function obtenerBc2() {
            const response = await fetch('http://localhost:5005/api/v1/bcmagee')
            const data = await response.json();
            setBc2(data.BC2);
        }
        obtenerBc2();
    }, []);

    useEffect(() => {
        async function obtenerBc3() {
            const response = await fetch('http://localhost:5005/api/v1/bcmagee')
            const data = await response.json();
            setBc3(data.BC3);
        }
        obtenerBc3();
    }, []);

    const data = {
        labels : dates.map((data) => data.value),
        datasets: [
            {
                label: "Black Carbon 1 Data",
                data: bc1.map((data) => data.value),
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.4,
                pointRadius: 3
            },
            {
                label: "Black Carbon 2 Data",
                data: bc2.map((data) => data.value),
                borderColor: 'rgba(53, 162, 235, 0.5)',
                tension: 0.4,
                pointRadius: 3
            },
            {
                label: "Black Carbon 3 Data",
                data: bc3.map((data) => data.value),
                borderColor: 'green',
                tension: 0.4,
                pointRadius: 3
            },
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
            <h2>Sensor: Black Carbon MAGEE</h2>
            <hr />
            <Line data={data} options={options} />
            <Link to="/">Volver</Link>
        </main>
    )
}

export default BcMagee;