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
    BarElement,
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

const MpGrimm = () => {

    const [fecha, setFecha] = useState([]);
    const [tsp, setTsp] = useState([]);
    const [pm10, setPm10] = useState([]);
    const [pm4, setPm4] = useState([]);
    const [pm1, setPm1] = useState([]);

    useEffect(() => {
        async function obtenerFecha() {
            const response = await fetch('http://localhost:5005/api/v1/mpgrimm')
            const data = await response.json();
            setFecha(data.Fecha);
        }
        obtenerFecha();
    }, []);

    useEffect(() => {
        async function obtenerTsp() {
            const response = await fetch('http://localhost:5005/api/v1/mpgrimm')
            const data = await response.json();
            setTsp(data.TSP);
        }
        obtenerTsp();
    }, []);

    useEffect(() => {
        async function obtenerPm4() {
            const response = await fetch('http://localhost:5005/api/v1/mpgrimm')
            const data = await response.json();
            setPm4(data.PM4);
        }
        obtenerPm4();
    }, []);

    useEffect(() => {
        async function obtenerPm1() {
            const response = await fetch('http://localhost:5005/api/v1/mpgrimm')
            const data = await response.json();
            setPm1(data.PM1);
        }
        obtenerPm1();
    }, []);

    useEffect(() => {
        async function obtenerPm10() {
            const response = await fetch('http://localhost:5005/api/v1/mpgrimm')
            const data = await response.json();
            setPm10(data.PM10);
        }
        obtenerPm10();
    }, []);

    const data = {
        labels : fecha.map((data) => data.value),
        datasets: [
            {
                label: "TSP Data",
                data: tsp.map((data) => data.value),
                backgroundColor: 'rgb(255, 99, 132)',
                tension: 0.3,
                pointRadius: 3
            },
            {
                label: "PM10 Data",
                data: pm10.map((data) => data.value),
                backgroundColor: 'rgb(53, 162, 235)',
                tension: 0.3,
                pointRadius: 3
            },
            {
                label: "PM4 Data",
                data: pm4.map((data) => data.value),
                backgroundColor: 'green',
                tension: 0.3,
                pointRadius: 3
            },
            {
                label: "PM1 Data",
                data: pm1.map((data) => data.value),
                backgroundColor: 'black',
                tension: 0.3,
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
            <h2>Sensor: Multiparametro</h2>
            <hr />
            <Bar data={data} options={options} />
            <Link to="/">Volver</Link>
        </main>
    )
}

export default MpGrimm;