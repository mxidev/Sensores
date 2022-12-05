import React from 'react';
import { Link } from 'react-router-dom';

const SensorPage = () => {
    return (
        <main>
            <nav>
                <div className="navigation">
                    <h2> Proyecto A&DSW </h2>
                    <Link to="/"> Acerca de </Link>
                </div>
            </nav>
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