import React from 'react';
import { Link } from 'react-router-dom';

const SensorPage = () => {
    return (
        <main>
            <h1> MERN Stack APP - A&DS || Equipo 36: Dinamita </h1>
            <hr />
            <div className='main'>
                <Link to="/api/radon">Radon </Link> 
                <Link to="/api/multiparametro">Multiparametro </Link> 
                <Link to="/api/bcmagee">Black Carbon - MAGEE </Link> 
                <Link to="/api/bcmaap">Black Carbon - MAAP </Link>
                <Link to="/api/radiometro">Radiometro </Link>
                <Link to="/api/mpgrimm">MP-Grimm </Link>
            </div>
        </main>
    )
}

export default SensorPage