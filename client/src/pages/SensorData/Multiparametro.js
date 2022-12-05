import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    LineElement,
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


const Multiparametro = () => {

    const [datos, setDatos] = useState([]);
    const [ws, setWS] = useState([]);
    const [wd, setWD] = useState([]);
    const [temp, setTemp] = useState([]);
    const [rh, setRH] = useState([]);

    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch('http://localhost:5005/api/v1/multiparametro')
            const data = await response.json();
            setDatos(data.TIMESTAMP);
        }
        obtenerDatos();
    }, []);

    useEffect(() => {
        async function obtenerWs() {
            const response = await fetch('http://localhost:5005/api/v1/multiparametro')
            const data = await response.json();
            setWS(data.WS);
        }
        obtenerWs();
    }, []);

    useEffect(() => {
        async function obtenerTemp() {
            const response = await fetch('http://localhost:5005/api/v1/multiparametro')
            const data = await response.json();
            setTemp(data.Temp);
        }
        obtenerTemp();
    }, []);

    useEffect(() => {
        async function obtenerRh() {
            const response = await fetch('http://localhost:5005/api/v1/multiparametro')
            const data = await response.json();
            setRH(data.RH);
        }
        obtenerRh();
    }, []);

    useEffect(() => {
        async function obtenerWd() {
            const response = await fetch('http://localhost:5005/api/v1/multiparametro')
            const data = await response.json();
            setWD(data.WD);
        }
        obtenerWd();
    }, []);

    const data = {
        labels : datos.map((data) => data.value),
        datasets: [
            {
                label: "WS Data",
                data: ws.map((data) => data.value),
                backgroundColor: 'rgb(255, 99, 132)',
                tension: 0.3,
            },
            {
                label: "RH Data",
                data: rh.map((data) => data.value),
                backgroundColor: 'rgba(53, 162, 235)',
                tension: 0.3
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
            <h2>Sensor: Multiparametro</h2>
            <hr />
            <Bar data={data} options={options} />
            <Link to="/">Volver</Link>
        </main>
    )
}

export default Multiparametro;